'use client';

import Head from 'next/head';
import * as React from 'react';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Zuzu.city</title>
        <meta name="description" content="Zuzu City" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <h5>
        This is the home page.
      </h5>
    </main>
  );
}