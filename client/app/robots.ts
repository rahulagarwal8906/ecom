import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL|| "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/", 
                disallow: [
                    "/api/",
                    "/address/add",
                    "/address/my-addresses",
                    "/cart",
                    "/order/",
                    "/user-profile"
                ]
            }
        ],
        sitemap: `${baseUrl}/sitemap.xml`
    };
}
