package com.websocket;

public class Message {

    private String username;
    private String messageDescription;


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getMessageDescription() {
        return messageDescription;
    }

    public void setMessageDescription(String messageDescription) {
        this.messageDescription = messageDescription;
    }


    @Override
    public String toString() {
        return "Message{" +
                "username='" + username + '\'' +
                ", messageDescription='" + messageDescription + '\'' +
                '}';
    }
}
