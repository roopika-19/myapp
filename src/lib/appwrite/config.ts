import { Client,Account,Databases,Storage,Avatars } from "appwrite";
export const appwriteConfig={
    projectId:'66962975000471294df1',
    url:"https://cloud.appwrite.io/v1",
    databaseId: '669841f2000839aad16d',
    storageId: '6698419a002a558e8520',
    userCollectionId: '6698429c0018bf8b7843',
    postCollectionId: '6698431c003073336fc8',
    savesCollectionId:'669842d50031aa80bc96'
}
export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);