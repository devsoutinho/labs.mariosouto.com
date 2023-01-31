import { Box, Button, useToast } from "@devsoutinho/sknui/web";
import { emailsRepository } from "@src/modules/emails/repository";
import mjml2html from "mjml";
import { theme } from "@devsoutinho/sknui/src/theme/default/theme";

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: any) {
  const slug = params.slug;
  const email = await emailsRepository.getEmailBySlug(slug);

  if (!email) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      email: template({ body: email.content }),
    },
  };
}

interface EmailProps {
  email: string;
}
export default function Email({ email }: EmailProps) {
  const toast = useToast();
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: email }} />
      <Box
        styleSheet={{
          position: "fixed",
          bottom: 0,
          right: 0,
          padding: "16px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button
          onTap={() => {
            navigator.clipboard.writeText(email);
            toast({
              title: "Copied!",
              description: "The email was copied to your clipboard.",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          }}
        >
          Copy
        </Button>
      </Box>
    </>
  );
}

interface TemplateProps {
  body: string;
}
function template({ body }: TemplateProps) {
  const typographySmall = theme.typography.body3;
  const Header = `
    <mj-section padding="0">
      <mj-column padding="0">
        <mj-image width="100px" src="https://github.com/devsoutinho.png"></mj-image>
      </mj-column>
    </mj-section>
  `;

  const Footer = `
    <mj-section background-color="${theme.colors.neutral.x900}">
      <mj-column align="center">
        <mj-text 
        font-size="${typographySmall.fontSize}"
        font-weight="${typographySmall.fontWeight}"
        line-height="${typographySmall.lineHeight}"
          color="${theme.colors.neutral.x100}"
          align="center"
        >
          DevSoutinho Labs © 2022, todos os direitos reservados.
        </mj-text>
      </mj-column>
    </mj-section>
    <mj-section background-color="${theme.colors.neutral.x900}">
      <mj-social font-size="12px" icon-size="20px" mode="horizontal">
      <mj-social-element name="youtube" href="https://youtube.com/@DevSoutinho/" />
      <mj-social-element name="linkedin-noshare" href="https://linkedin.com/in/omariosouto/" />
      <mj-social-element name="twitter-noshare" href="https://twitter.com/omariosouto/" />
    </mj-social>
  `;

  const htmlOutput = mjml2html(
    `
<mjml>
  <mj-body>
    ${Header}
    <mj-section>
      <mj-column>
        ${body}
      </mj-column>
    </mj-section>
    ${Footer}
  </mj-body>
</mjml>
`,
    {}
  );
  return htmlOutput.html;
}
