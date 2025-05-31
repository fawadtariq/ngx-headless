import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className='py-6'>
      <div className="container flex justify-between items-center">
        <a className='cursor-pointer' href='/'><img src="img/ngx-headless-dark.svg" alt="@ngx-headless/ui Logo" className="ms-2 inline-block h-8" /></a>
        <a aria-label="View project on GitHub" href="https://github.com/fawadtariq/ngx-headless"><svg className="h-6 fill-white" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5808 20.2773 21.0498 21.7438 19.0074C23.2103 16.9651 23.9994 14.5143 24 12C24 5.37 18.63 0 12 0Z"></path></svg></a>
      </div>
      <div className="container z-10 !max-w-7xl">
        <div className="text-2xl lg:text-4xl  font-bold flex flex-col lg:flex-row lg:items-center pt-8 lg:pt-16 pb-8 lg:px-0 px-4 gap-0 lg:gap-2">
          <div className='flex item-center'>
            <span>Inspired by</span>
            <a className='cursor-pointer ms-2 !text-white' href='https://headlessui.com/' target="_blank"><img src="img/headless-ui.svg" alt="Headless UI Logo" className="inline-block h-8 lg:h-12" /></a>
            <span className='hidden lg:inline-block'>.</span>
          </div>
          <span>Built natively for Angular</span>
        </div>
      </div>
    </header>

  );
}

export function Example() {
  return (
    <div className='flex flex-col h-full'>
      <div
        className="absolute inset-0 -z-10 bg-position-[35%_top] bg-no-repeat sm:bg-position-[38%_top] md:bg-position-[40%_top] lg:bg-position-[44%_top] xl:bg-top forced-colors:hidden"
        style={{ backgroundImage: "url(img/bg-top.jpg)" }}
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 -z-10 bg-position-[35%_bottom] bg-no-repeat mix-blend-screen sm:bg-position-[38%_bottom] md:bg-position-[40%_bottom] lg:bg-position-[44%_bottom] xl:bg-bottom forced-colors:hidden" style={{ backgroundImage: "url(img/bg-bottom.jpg)" }} aria-hidden="true"></div>
      <div className="absolute bg-primary-default -z-9 w-full h-full mix-blend-color opacity-65"></div>
      <HomepageHeader />

      <div className='bg-black/70 w-full rounded-t-3xl h-full z-10 py-8 lg:py-18'>
        <div className="container flex items-center w-full justify-between lg:flex-row flex-col">
          <div className="flex flex-col text-center lg:text-left">
            <span className={('bg-gradient-to-r from-primary-600 to-secondary-700 text-transparent bg-clip-text text-xl lg:text-2xl font-bold')}>
              Angular components that are unstyled, accessible, and fully customizable.
            </span>

            <span className='bg-gradient-to-r from-tertiary-300 to-seconary-900 opacity-75 text-transparent bg-clip-text t text-sm lg:text-md italic'>- Build your own design system in angular with ease.</span>
          </div>
          <Link className=' button button--primary button--lg !text-primary-200 !bg-primary-default my-8 lg:my-0 lg:w-max' to="/docs/intro">Get Started</Link>
        </div>
        <div className="container !pt-8 !lg:pt-24">
          
        </div>
      </div>
    </div>
  )
}


export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Example />
    // <Layout
    //   title={`Hello from ${siteConfig.title}`}
    //   description="Description will go into a meta tag in <head />">

    //   <main>
    //     <HomepageFeatures />
    //   </main>
    // </Layout>
  );
}
