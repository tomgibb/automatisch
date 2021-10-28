import { InstallProvider } from '@slack/oauth';
import App from '../../models/app';
import Field from '../../types/field';

export default class Slack {
  client: any
  connectionData: any
  appData: any

  scopes: string[] = [
    'channels:read'
  ]

  constructor(connectionData: any) {
    this.client = new InstallProvider({
      clientId: connectionData.consumerKey,
      clientSecret: connectionData.consumerSecret,
      stateSecret: 'my-state-secret'
    });

    this.connectionData = connectionData;
    this.appData = App.findOneByKey('slack');
  }

  async createAuthData() {
    const url = await this.client.generateInstallUrl({
      scopes: this.scopes
    })

    return { url }
  }

  async verifyCredentials() {
    // const verifiedCredentials = await this.client.login(this.connectionData.oauthVerifier)

    // return {
    //   consumerKey: this.connectionData.consumerKey,
    //   consumerSecret: this.connectionData.consumerSecret,
    //   accessToken: verifiedCredentials.accessToken,
    //   accessSecret: verifiedCredentials.accessSecret,
    //   userId: verifiedCredentials.userId,
    //   screenName: verifiedCredentials.screenName
    // }
  }

  async isStillVerified() {
    // try {
    //   await this.client.currentUser();
    //   return true;
    // } catch {
    //   return false
    // }
  }
}
