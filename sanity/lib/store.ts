// Note: This file is used to set up the store for the react-loader package. This is used to load queries from the Sanity API.
import * as queryStore from "@sanity/react-loader";

import { client } from "@/sanity/lib/sanity.client";
import { token } from "@/sanity/lib/token";

queryStore.setServerClient(client.withConfig({ token }));

export const { loadQuery } = queryStore;

// Preparing the server-side loadQuery function with a viewer token
// so that it can make authenticated requests to the Sanity API
// with previewDrafts perspective at the time of request
// this ensures you don't have a ~ flash of published content ~ on the initial load