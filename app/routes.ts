import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/auth", "routes/auth.tsx"),
    route("/upload", "routes/upload.tsx"),


] satisfies RouteConfig;


// import { type RouteConfig, index, route } from "@react-router/dev/routes";

// export default [
//     index(file:"routes/home.tsx"),
//     route(path:"/auth",file:"routes/home.tsx"),

// ] satisfies RouteConfig;
