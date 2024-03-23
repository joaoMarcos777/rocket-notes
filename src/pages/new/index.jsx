import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Textarea } from "../../components/textarea";
import { Section } from "../../components/section";

import { Container, Form } from "./styles";
import { NoteItem } from "../../components/note-item";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Create note</h1>
            <Link to="/">Back</Link>
          </header>

          <Input placeholder="Title" />
          <Textarea placeholder="Comments" />

          <Section title="Useful links">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem placeholder="New link" isNew />
          </Section>

          <Section title="Tags">
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem placeholder="New tag" isNew />
            </div>
          </Section>

          <Button title="Save" />
        </Form>
      </main>
    </Container>
  );
}
