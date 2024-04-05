import { useState, useEffect } from "react";
import { Container, Links, Content } from "./styles";
import { useNavigate, useParams } from "react-router-dom";

import { api } from "../../services/api";

import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Section } from "../../components/section";
import { Tag } from "../../components/tag";
import { ButtonText } from "../../components/button-text";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Do you really want to remove this note?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText title="Delete note" onClick={handleRemove} />

            <h1>{data.title}</h1>

            <p>{data.description}</p>

            {data.links && (
              <Section title="Useful links">
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a href={link.url} target="_blank">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title="Tags">
                {data.tags.map((tag) => (
                  <Tag key={tag.id} title={tag.name} />
                ))}
              </Section>
            )}

            <Button title="Back" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  );
}
