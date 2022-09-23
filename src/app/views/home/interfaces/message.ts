export interface Message {
  date: string;
  hour: string;
  id: number;
  message: string;
  username: string;
  username_color: string;
}

export interface MessageDisplay extends Message {
  justify: string;
}

export interface MessageToSend {
  username_id: number;
  message: string;
  date: string;
  hour: string;
  token: string;
}
