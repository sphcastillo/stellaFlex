// function that allows us to get information

import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import type { SiteSettingsQueryResult } from "@/sanity.types";

const siteSettingsQuery = defineQuery(`*[_type == "siteSettings"][0]{
    ...,
    mainHeroImage {
        ...,
        asset->{
        _id,
        url,
        }
    }
    }`);

export async function getSiteSettings(): Promise<SiteSettingsQueryResult>{
    const { data } = await sanityFetch({
        query: siteSettingsQuery,
    });

    return data;
}