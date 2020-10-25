export interface RouteJson {
    name: string;
    path: string;
    routePath: string;
    children? : RouteJson []
}

export const routeJson: RouteJson [] = 
[
    {
        "name": "rxjs",
        "path": "rxjs",
        "routePath": "/rxjs",
        "children": [
            {
                "name": "subjects",
                "path": "subjects",
                "routePath": "/rxjs/subjects",
                "children": [
                    {
                        "name": "subject",
                        "path": "subjects/subject",
                        "routePath": "/rxjs/subjects/subject"
                    },
                    {
                        "name": "behavior-subject",
                        "path": "subjects/behavior-subject",
                        "routePath": "/rxjs/subjects/behavior-subject"
                    },
                    {
                        "name": "replay-subject",
                        "path": "subjects/replay-subject",
                        "routePath": "/rxjs/subjects/replay-subject"
                    },
                    {
                        "name": "async-subject",
                        "path": "subjects/async-subject",
                        "routePath": "/rxjs/subjects/async-subject"
                    }
                ]
            },{
                "name": "operators",
                "path": "operators",
                "routePath": "/rxjs/operators",
                "children": [
                    {
                        "name": "maps",
                        "path": "operators/maps",
                        "routePath": "/rxjs/operators/maps",
                        "children": [
                            {
                                "name": "merge-map",
                                "path": "operators/maps/merge-map",
                                "routePath": "/rxjs/operators/maps/merge-map"
                            },
                            {
                                "name": "switch-map",
                                "path": "operators/maps/switch-map",
                                "routePath": "/rxjs/operators/maps/switch-map"
                            }
                        ]
                    },
                    {
                        "name": "debounce",
                        "path": "operators/debounce",
                        "routePath": "/rxjs/operators/debounce",
                    }
                ]
            }
        ]
    }
]