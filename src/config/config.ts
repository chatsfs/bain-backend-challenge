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
    return port ? Number(port) : 3002;
  }

  static get jwtSecretKey(): string {
    return this.get('JWT_SECRET_KEY');
  }

  static get jwtExpiration(): number {
    return Number(this.get('JWT_EXPIRATION'));
  }

  static get HttpRequestLogs(): boolean {
    return Boolean(this.get('HTTP_REQUEST_LOGS'));
  }

  static get emailSender(): string {
    return String(this.get('EMAIL_SENDER'));
  }

  static get emailSenderPassword(): string {
    return String(this.get('EMAIL_SENDER_PASSWORD'));
  }

  static get emailBaseUrl(): string {
    return String(this.get('EMAIL_BASE_URL'));
  }

  static get emailHygge(): string {
    return String(this.get('EMAIL_HYGGE'));
  }

  static get noImageUrl(): string {
    return String(this.get('NO_IMAGE_URL'));
  }
  static get noImageBanner(): string {
    return String(this.get('NO_IMAGE_BANNER'));
  }

  //#region STORAGE
  static get bucketEndpoint(): string {
    return String(this.get('BUCKET_ENDPOINT'));
  }
  static get bucketAccessKeyId(): string {
    return String(this.get('BUCKET_ACCESS_KEY_ID'));
  }
  static get bucketSecretKey(): string {
    return String(this.get('BUCKET_SECRET_KEY'));
  }
  static get bucketName(): string {
    return String(this.get('BUCKET_NAME'));
  }
  //#endregion

  //#region CULQI
  static get CulqiURL(): string {
    return String(this.get('CULQI_URL'));
  }

  static get CulqiKey(): string {
    return String(this.get('CULQI_SECRET_KEY'));
  }
  //#endregion
}
