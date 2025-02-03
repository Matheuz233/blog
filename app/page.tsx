import Image from "next/image";
import Icon from "@/public/icon.png";
import { Badge, Box, Select, Tabs, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

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

              {/* <Badge variant="solid" color="green">
                  Novo
                </Badge> */}
            </Tabs.Content>

            <Tabs.Content value="about">
              <p>Sobre</p>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </main>

      <footer className="border-t-2 border-[#67383D] mt-4 pt-4 ">
        <p className="text-center text-sm text-[secondary]">
          © 2023 Matheus Augusto. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
