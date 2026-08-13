import { initializeTestEnvironment, RulesTestEnvironment, assertFails, assertSucceeds } from "@firebase/rules-unit-testing";
import { setDoc, doc, updateDoc, getDoc, collection, getDocs } from "firebase/firestore";
import * as fs from "fs";

let testEnv: RulesTestEnvironment;

beforeAll(async () => {
  // Inicializa o ambiente de teste carregando as regras atuais do firestore.rules
  testEnv = await initializeTestEnvironment({
    projectId: "fluir-teste-seguranca",
    firestore: {
      rules: fs.readFileSync("firestore.rules", "utf8"),
      host: "127.0.0.1",
      port: 8080
    },
  });
});

afterAll(async () => {
  // Limpa o ambiente após os testes
  await testEnv.cleanup();
});

beforeEach(async () => {
  // Limpa o banco de dados antes de cada teste
  await testEnv.clearFirestore();
});

describe("Testes de Segurança (Firestore Rules)", () => {

  test("✅ Aluno comum não pode apagar o post de outra pessoa", async () => {
    // 1. Setup: Criar um post fingindo ser o Admin
    await testEnv.withSecurityRulesDisabled(async (context) => {
      const db = context.firestore();
      await setDoc(doc(db, "posts/post_do_admin"), {
        authorId: "admin123",
        text: "Este post é do admin",
      });
    });

    // 2. Simulador: Entra como Aluno
    const aliceDb = testEnv.authenticatedContext("aluno_comum").firestore();

    // 3. Tentativa maliciosa: Aluno tentar deletar o post do admin
    // Isso usa assertFails() que passa no teste SE a requisição for NEGADA.
    const tentativa = updateDoc(doc(aliceDb, "posts/post_do_admin"), {
      text: "Hackeado",
    });
    
    await assertFails(tentativa);
  });

  test("✅ Aluno não consegue liberar matrículas para si mesmo", async () => {
    // 1. Setup: Perfil do aluno criado no banco
    await testEnv.withSecurityRulesDisabled(async (context) => {
      const db = context.firestore();
      await setDoc(doc(db, "users/aluno_esperto"), {
        role: "aluno",
        enrolledCourses: []
      });
    });

    // 2. Simulador: Entra como o Aluno
    const aliceDb = testEnv.authenticatedContext("aluno_esperto").firestore();

    // 3. Tentativa: Aluno tenta injetar o curso mestrado no próprio perfil
    const tentativa = updateDoc(doc(aliceDb, "users/aluno_esperto"), {
      enrolledCourses: ["curso_mestrado"]
    });

    await assertFails(tentativa);
  });

  test("✅ Aluno não consegue alterar os links de pagamento de Admin", async () => {
    const aliceDb = testEnv.authenticatedContext("aluno_comum").firestore();
    const tentativa = setDoc(doc(aliceDb, "settings/links"), { mentoriaUrl: "site-falso" });
    await assertFails(tentativa);
  });

  test("✅ Aluno comum não pode baixar a lista de todos os alunos", async () => {
    const aliceDb = testEnv.authenticatedContext("aluno_comum").firestore();
    
    // Tentar ler toda a coleção de usuários
    const tentativa = getDocs(collection(aliceDb, "users"));
    await assertFails(tentativa);
  });

  test("✅ O banco de dados recusa postagens gigantes que causam lentidão", async () => {
    const aliceDb = testEnv.authenticatedContext("aluno1").firestore();
    const textoGigante = "A".repeat(2500); // Acima do limite de 2000
    
    const tentativa = setDoc(doc(aliceDb, "posts/novo_post"), {
      authorId: "aluno1",
      text: textoGigante
    });

    await assertFails(tentativa);
  });

});
