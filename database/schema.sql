CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100),
  avatar TEXT
);
CREATE TABLE agents (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  avatar TEXT,
  group_name VARCHAR(100)
);
CREATE TABLE circles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  user_id INT REFERENCES users(id)
);
CREATE TABLE circle_agents (
  circle_id INT REFERENCES circles(id),
  agent_id INT REFERENCES agents(id),
  PRIMARY KEY(circle_id, agent_id)
);
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  circle_id INT REFERENCES circles(id),
  sender VARCHAR(100),
  text TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);