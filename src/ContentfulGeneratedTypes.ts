// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";

export interface IBlogEntryFields {
  /** Title */
  title?: string | undefined;

  /** Post */
  post?: string | undefined;

  /** Slug */
  slug?: string | undefined;
}

/** Contains a single blog entry */

export interface IBlogEntry extends Entry<IBlogEntryFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blogEntry";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "blogEntry";

export type IEntry = IBlogEntry;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";