import { Route } from "@angular/router";
export const appRoutes: Route[] = [
    {
        path: "",
        children: [
            {
                path: '',
                loadChildren: () => 
                import("src/app/admin/home/home.module").then(
                    (m) => m.HomeModule
                )
            },
            {
                path: 'post',
                loadChildren: () => 
                import("src/app/admin/post/post.module").then(
                    (m) => m.PostModule
                )
            },
            {
                path: 'comments',
                loadChildren: () => 
                import("src/app/admin/comments/comments.module").then(
                    (m) => m.CommentsModule
                )
            },
        ]
    }
]