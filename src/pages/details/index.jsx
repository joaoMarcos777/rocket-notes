import { Container, Links, Content } from "./styles";

import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { ButtonText } from "../../components/button-text";
import { Tag } from "../../components/tag";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Delete note" />

          <h1>Introduction to React</h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <Section title="Useful links">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
            </Links>
          </Section>

          <Section title="Tags">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Back" />
        </Content>
      </main>
    </Container>
  );
}
