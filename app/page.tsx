import Image from "next/image";
import Icon from "@/public/icon.png";
import { Badge, Box, Select, Tabs, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { PostCard } from "@/components/card";
import moment from "moment";

const Posts = [
  {
    title: "Introdução ao TypeScript",
    description: "Aprenda os conceitos básicos do TypeScript e como melhorar seu código JavaScript.",
    date: "2024-05-15",
    tags: ["TypeScript", "JavaScript", "Desenvolvimento"]
  },
  {
    title: "Como otimizar o desempenho de React",
    description: "Dicas e técnicas para melhorar a performance da sua aplicação React.",
    date: "2024-10-10",
    tags: ["React", "Performance", "Frontend"]
  },
  {
    title: "Guia Completo de CSS Grid",
    description: "Domine o layout de CSS Grid e crie designs incríveis para seus sites.",
    date: "2023-12-20",
    tags: ["CSS", "Layout", "Design"]
  },
  {
    title: "Entendendo o Vue.js: Um framework reativo",
    description: "Aprenda a criar aplicações interativas usando o Vue.js.",
    date: "2025-01-08",
    tags: ["Vue.js", "Frontend", "Framework"]
  },
  {
    title: "Introdução ao Node.js para Iniciantes",
    description: "Comece a desenvolver aplicações no servidor usando Node.js.",
    date: "2023-10-25",
    tags: ["Node.js", "Backend", "JavaScript"]
  },
  {
    title: "Domine o Git e GitHub",
    description: "Aprenda a usar Git e GitHub para versionamento de código e colaboração.",
    date: "2024-04-30",
    tags: ["Git", "GitHub", "Versionamento"]
  },
  {
    title: "A Jornada do Desenvolvimento Mobile com React Native",
    description: "Comece a criar aplicativos móveis usando React Native.",
    date: "2025-03-12",
    tags: ["React Native", "Mobile", "Desenvolvimento"]
  },
  {
    title: "Criando API REST com Express.js",
    description: "Aprenda a criar APIs RESTful utilizando o Express.js no Node.js.",
    date: "2023-07-18",
    tags: ["Express.js", "API", "Backend"]
  },
  {
    title: "Fundamentos de Design Responsivo com CSS",
    description: "Como criar layouts que se adaptam a diferentes tamanhos de tela.",
    date: "2024-11-02",
    tags: ["CSS", "Design", "Responsivo"]
  },
  {
    title: "Introdução ao Angular: Construindo Aplicações Web",
    description: "Entenda os conceitos essenciais do Angular e como criar aplicações poderosas.",
    date: "2025-05-05",
    tags: ["Angular", "Frontend", "Framework"]
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen max-w-screen-lg mx-auto p-4">
      <header className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <Image src={Icon} alt={"Computador Image"} height={40} width={40} />
          <div>
            <h1 className="font-extrabold font-[family-name:var(--font-rubik-mono)]">Matheus Augusto</h1>
            <h1 className="font-extrabold font-[family-name:var(--font-rubik-mono)]">Programador</h1>
          </div>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus natus ea, perferendis aliquam molestiae, aperiam aliquid quibusdam a nisi, obcaecati nemo nostrum porro nulla voluptates architecto laborum magni nesciunt quaerat.</p>
        </div>
      </header>

      <main className="flex-1 mt-4">
        <Tabs.Root defaultValue="posts">
          <Tabs.List color="red" >
            <Tabs.Trigger value="posts" className="text-secondary">Postagens</Tabs.Trigger>
            <Tabs.Trigger value="about" className="text-secondary">Sobre</Tabs.Trigger>
          </Tabs.List>

          <Box pt="3" className="flex flex-col space-y-4">
            <Tabs.Content value="posts">
              <div>
                <h2>Postagens</h2>
                <TextField.Root placeholder="Pesquisar…">
                  <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16" />
                  </TextField.Slot>
                </TextField.Root>
              </div>
              <Select.Root defaultValue="all">
                <Select.Trigger radius="small" />
                <Select.Content>
                  <Select.Group>
                    <Select.Item value="all">Todos</Select.Item>
                  </Select.Group>
                  <Select.Separator />
                  <Select.Group>
                    <Select.Label>Fruits</Select.Label>
                    <Select.Item value="orange">React</Select.Item>
                    <Select.Item value="apple">Laravel</Select.Item>
                    <Select.Item value="grape">Competição</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Root>

              <div className="grid grid-cols-1 gap-4 mt-4">
                {Posts.map((post, index) => (
                  <PostCard key={index} {...post} />
                ))}
              </div>
            </Tabs.Content>

            <Tabs.Content value="about">

            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </main>

      <footer className="border-t-2 border-[#67383D] mt-4 pt-4 ">
        <p className="text-center text-sm text-[secondary]">
          © {moment().format('YYYY')} Matheus Augusto. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
