export interface TAllowOrigins {
  protocol: ("http" | "https")[];
  domain: string;
  ports: number[];
}

const allowOrigins: TAllowOrigins[] = [
  {
    protocol: ["http", "https"],
    domain: "127.0.0.1",
    ports: [5173,8080]
  },
  {
    protocol: ["http", "https"],
    domain: "localhost",
    ports: [5173,8080]
  },
  {
    protocol: ["http", "https"],
    domain: "0.0.0.0",
    ports: [5173,8080]
  },
  {
    protocol: ["http", "https"],
    domain: "103.232.121.159",
    ports: [5173,8080]
  },
  {
    protocol: ["http", "https"],
    domain: "monantrunghoa.netlify.app",
    ports: []
  }
];

export default allowOrigins;
