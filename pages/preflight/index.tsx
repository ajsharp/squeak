import Head from 'next/head'

import type {GetServerSideProps, NextPage} from 'next'

import styles from '../../styles/Home.module.css'
import Link from "next/link";
import {createClient} from '@supabase/supabase-js';
import {definitions} from "../../@types/supabase";
import {GetStaticPropsResult} from "next";

type Config = definitions['config'];

interface Props {
}

const PreflightWelcome: NextPage<Props> = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Squeak</title>
                <meta name="description" content="Something about Squeak here..."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Preflight
                </h1>

                <p>Welcome to Squeak! Let's get you setup.</p>
                <Link href="/preflight/supabase">
                    <button>Let's go!</button>
                </Link>
            </main>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (): Promise<GetStaticPropsResult<Props>> => {
    const supabaseUrl = process.env.SUPABASE_URL as string;
    const supabaseAnonKey = process.env.SUPABASE_ANON_KEY as string;

    const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

    let {data: config} = await supabaseClient
        .from<Config>('config')
        .select(`preflightComplete`)
        .eq('id', 1)
        .single()

    // If we don't have data at all, we need to create a config row
    if (!config) {
        await supabaseClient
            .from<Config>('config')
            .insert({
                id: 1,
                preflightComplete: false
            });

        // TODO(JS): Handle errors here?
    }

    return {
        props: {},
    }
}

export default PreflightWelcome
