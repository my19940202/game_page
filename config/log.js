{
    "appenders":
        [
            {
                "category":"game",
                "type": "dateFile",
                "filename": "./logs/",
                "alwaysIncludePattern": true,
                "pattern": "game.log.yyyyMMddhh"
            },
            {"type": "console"}
        ],
    "replaceConsole": true,
    "levels":
    {
        "pattern":"ALL"
    }
}
