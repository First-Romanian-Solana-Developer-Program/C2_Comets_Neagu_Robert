import "dotenv/config";
import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { airdropIfRequired } from '@solana-developers/helpers';

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

console.log("Connected to devnet!", connection.rpcEndpoint);

const publicKey = new PublicKey("J7efixrJuaBnemTBu4F68uTKt1Rpjt7hR6BtNBY49nz5");

const balanceInLamports = await connection.getBalance(publicKey);

console.log("Andreea's balance in lamports:", balanceInLamports);

console.log("Airdropping 1 SOL to my address...");

await airdropIfRequired(
    connection, 
    publicKey, 
    1 * LAMPORTS_PER_SOL,
    0.5 * LAMPORTS_PER_SOL
);

console.log("Done airdropping!");

const newBalanceInLamports = await connection.getBalance(publicKey);

console.log("My new balance in lamports:", newBalanceInLamports);