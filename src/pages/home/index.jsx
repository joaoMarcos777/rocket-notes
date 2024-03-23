import { FiPlus } from "react-icons/fi";
import { ButtonText } from "../../components/button-text";
import { Header } from "../../components/header";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Input } from "../../components/input";
import { Section } from "../../components/section";
import { Note } from "../../components/note";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocket Notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          {" "}
          <ButtonText title="All" />
        </li>
        <li>
          {" "}
          <ButtonText title="React" />
        </li>
        <li>
          {" "}
          <ButtonText title="Node" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Search by title" />
      </Search>

      <Content>
        <Section title="My notes">
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "rocket" },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Create note
      </NewNote>
    </Container>
  );
}
