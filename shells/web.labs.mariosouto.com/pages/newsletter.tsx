import {
  Box,
  Button,
  Image,
  InputText,
  Text,
  useTheme,
} from "@devsoutinho/sknui/web";
import React from "react";

export default function Newsletter() {
  const { theme } = useTheme();
  const [emailTouched, setEmailTouched] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const isValidEmail = email.length > 0 && email.indexOf("@") > -1;

  return (
    <Box
      styleSheet={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: theme.spacing.x4,
      }}
    >
      <Box
        styleSheet={{
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <Image
          src="https://github.com/omariosouto.png"
          alt="Foto do DevSoutinho"
          styleSheet={{
            borderRadius: theme.rounded.full,
            width: theme.spacing.x20,
            height: theme.spacing.x20,
            margin: "auto",
            marginBottom: theme.spacing.x4,
          }}
        />
        <Text
          tag="h1"
          typographyToken={{
            xs: "heading3",
            md: "heading2",
          }}
          styleSheet={{
            textAlign: "center",
          }}
        >
          Newsletter do DevSoutinho
        </Text>
        <Text
          typographyToken={{
            xs: "body1",
          }}
          styleSheet={{
            textAlign: "center",
          }}
        >
          Sempre que possível com dicas legais sobre desenvolvimento :)
        </Text>
        <Box
          tag="form"
          action="https://mariosouto.us8.list-manage.com/subscribe/post?u=8225f161ef3ee7a744fd4a2ba&id=2e2754236e"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
          styleSheet={{
            width: "100%",
            marginTop: theme.spacing.x10,
            maxWidth: "300px",
            marginX: "auto",
          }}
        >
          <InputText
            name="EMAIL"
            id="mce-EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setEmailTouched(true)}
            placeholder="Email aqui, eu também não gosto de spam :)"
            error={emailTouched && !isValidEmail ? "Email inválido" : undefined}
          />
          {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_8225f161ef3ee7a744fd4a2ba_2e2754236e"
              tabIndex={-1}
            />
          </div>

          <Button
            type="submit"
            id="mc-embedded-subscribe"
            disabled={!isValidEmail}
          >
            Inscreva-se
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
