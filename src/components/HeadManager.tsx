import React from "react";

const HeadManager: React.FC = () => {
  React.useEffect(() => {
    // Google Fonts
    const link1 = document.createElement("link");
    link1.rel = "preconnect";
    link1.href = "https://fonts.googleapis.com";
    document.head.appendChild(link1);

    const link2 = document.createElement("link");
    link2.rel = "preconnect";
    link2.href = "https://fonts.gstatic.com";
    link2.crossOrigin = "anonymous";
    document.head.appendChild(link2);

    const link3 = document.createElement("link");
    link3.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap";
    link3.rel = "stylesheet";
    document.head.appendChild(link3);

    // Meta tags
    const metaTagAttrs = [
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { name: "description", content: "Project" },
      { name: "author", content: "Himanshu Sahu" },
      { property: "og:title", content: "Knotify - Friendship Surprise" },
      {
        property: "og:description",
        content: "Unwrap a special friendship surprise!",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: "https://lovable.dev/opengraph-image-p98pqg.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@lovable_dev" },
      {
        name: "twitter:image",
        content: "https://lovable.dev/opengraph-image-p98pqg.png",
      },
    ];

    const createdMetaTags: HTMLMetaElement[] = [];
    metaTagAttrs.forEach((attrs) => {
      const meta = document.createElement("meta");
      Object.entries(attrs).forEach(([key, value]) => {
        meta.setAttribute(key, value);
      });
      document.head.appendChild(meta);
      createdMetaTags.push(meta);
    });

    document.title = "Knotify - Friendship Surprise";

    // IBM Watson Assistant Chatbot
    (window as any).watsonAssistantChatOptions = {
      integrationID: "159088f7-4374-4c9e-a5b3-345d0e557c7f", // The ID of this integration.
      region: "jp-tok", // The region your integration is hosted in.
      serviceInstanceID: "be987c4d-6626-4467-8cdd-ca840e727f4d", // The ID of your service instance.
      onLoad: async (instance: any) => { await instance.render(); }
    };
    const watsonScript = document.createElement('script');
    const timeoutId = setTimeout(() => {
      const watsonOptions = (window as any).watsonAssistantChatOptions;
      watsonScript.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (watsonOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
      document.head.appendChild(watsonScript);
    }, 0);

    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
      document.head.removeChild(link3);
      createdMetaTags.forEach((meta) => document.head.removeChild(meta));
      clearTimeout(timeoutId);
      if (watsonScript.parentNode) {
        document.head.removeChild(watsonScript);
      }
      delete (window as any).watsonAssistantChatOptions;
    };
  }, []);

  return null;
};

export default HeadManager;
