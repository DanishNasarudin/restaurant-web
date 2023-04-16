import Iframe from "sanity-plugin-iframe-pane";
import { DefaultDocumentNodeResolver } from "sanity/desk";

const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  if (schemaType === "news") {
    return S.document().views([
      S.view.form(),

      S.view
        .component(Iframe)
        .options({
          url: `${"http://localhost:5173"}/preview`,
          defaultSize: `desktop`,
          reload: {
            button: true,
          },
          attributes: {},
        })
        .title("Preview"),
    ]);
  }
  return S.document().views([S.view.form()]);
};

export default getDefaultDocumentNode;
