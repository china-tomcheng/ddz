let EventType = {
    /**
     * 发送的data格式{seatId:,pokers:[]}
     * 接收的data格式{cmd:"",playerId:socket.id,pokers:[]}
     */
    MSG_DDZ_NEW_PLAYER: 'MSG_DDZ_NEW_PLAYER',
    MSG_DDZ_REGISTER: 'MSG_DDZ_REGISTER',
    MSG_DDZ_LOGIN: 'MSG_DDZ_LOGIN',
    MSG_DDZ_PLAYER_CONNECTED: "MSG_DDZ_PLAYER_CONNECTED",
    MSG_DDZ_ENTER_TABLE: "MSG_DDZ_ENTER_TABLE",
    MSG_DDZ_ALL_TABLES: "MSG_DDZ_ALL_TABLES",
    MSG_DDZ_PLAYER_PREPARED:"MSG_DDZ_PLAYER_PREPARED",
    MSG_DDZ_PASS: "MSG_DDZ_PASS",
    MSG_DDZ_ALL_PLAYERS: "MSG_DDZ_ALL_PLAYERS",
    MSG_DDZ_DEAL_POKER: "MSG_DDZ_DEAL_POKER",
    MSG_DDZ_CALL_LANDLORD:"MSG_DDZ_CALL_LANDLORD",
    MSG_DDZ_NO_CALL_LANDLORD:"MSG_DDZ_NO_CALL_LANDLORD",
    MSG_DDZ_ROB_LANDLORD:"MSG_DDZ_ROB_LANDLORD",
    MSG_DDZ_NO_ROB_LANDLORD:"MSG_DDZ_NO_ROB_LANDLORD",
    MSG_DDZ_DISCARD: "MSG_DDZ_DISCARD",
    MSG_DDZ_CREATE_ROOM: "MSG_DDZ_CREATE_ROOM",
    MSG_DDZ_PLAY_POKER: "MSG_DDZ_PLAY_POKER",
    MSG_DDZ_START_GAME: "MSG_DDZ_START_GAME",
    MSG_DDZ_START:"MSG_DDZ_START",
    MSG_DDZ_GAME_OVER: "MSG_DDZ_GAME_OVER",
    MSG_DDZ_PLAYER_LEAVE:"MSG_DDZ_PLAYER_LEAVE",
    MSG_DDZ_PLAYER_DISCONNECT:"MSG_DDZ_PLAYER_DISCONNECT",

};
module.exports = EventType;