export class Config {
  private static get(key: string) {
    return process.env[key];
  }

  static get enviroment(): string {
    const env = this.get('NODE_ENV');
    return env ? env : 'development';
  }

  static get isDevelopment(): boolean {
    return this.get('NODE_ENV') === 'development';
  }

  static get isTesting(): boolean {
    return this.get('NODE_ENV') === 'test';
  }

  static get isProduction(): boolean {
    return this.get('NODE_ENV') === 'production';
  }

  static get dbHost(): string {
    const host = this.get('DB_HOST');
    return host ? host : 'localhost';
  }

  static get dbUsername(): string {
    const username = this.get('DB_USERNAME');
    return username ? username : 'root';
  }

  static get dbPassword(): string {
    const password = this.get('DB_PASSWORD');
    return password ? password : 'root';
  }

  static get dbPort(): number {
    const port = this.get('DB_PORT');
    return port ? Number(port) : 3306;
  }

  static get dbName(): string {
    return this.get('DB_NAME') ?? 'bain';
  }

  static get dbSocketPath(): string {
    let dbSocketPath = this.get('DB_SOCKET_PATH');
    if (!dbSocketPath) dbSocketPath = '';
    return dbSocketPath;
  }

  static get port(): number {
    const port = this.get('PORT');
    return port ? Number(port) : 3000;
  }

  static get HttpRequestLogs(): boolean {
    return Boolean(this.get('HTTP_REQUEST_LOGS'));
  }

  //#endregion
}
