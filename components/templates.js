import Sibedabar from "./sidebar"
import Script from 'next/script'
import Head from 'next/head'
const HeaderTag = (title) => {

    return (<>

        <title>
            {title}
        </title>


    </>)

}
export default function Template({ title, content }) {
    return (
        <>
            <div>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content />
                <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors" />
                <meta name="generator" content="Hugo 0.84.0" />
                <Head>
                    <title>{title}</title>
                </Head>
                <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/dashboard/" />
                {/* Bootstrap core CSS */}
                <link href="/docs/5.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
                {/* Favicons */}
                <link rel="apple-touch-icon" href="/docs/5.0/assets/img/favicons/apple-touch-icon.png" sizes="180x180" />
                <link rel="icon" href="/docs/5.0/assets/img/favicons/favicon-32x32.png" sizes="32x32" type="image/png" />
                <link rel="icon" href="/docs/5.0/assets/img/favicons/favicon-16x16.png" sizes="16x16" type="image/png" />
                <link rel="manifest" href="/docs/5.0/assets/img/favicons/manifest.json" />
                <link rel="mask-icon" href="/docs/5.0/assets/img/favicons/safari-pinned-tab.svg" color="#7952b3" />
                <link rel="icon" href="/docs/5.0/assets/img/favicons/favicon.ico" />
                <meta name="theme-color" content="#7952b3" />
                <style dangerouslySetInnerHTML={{ __html: "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n    " }} />
                {/* Custom styles for this template */}

                <Script src="/docs/5.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>
                <Script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js"></Script>

                <script src="https://getbootstrap.com/docs/5.0/examples/dashboard/dashboard.js"></script>

                <link href="dashboard.css" rel="stylesheet" />
                <header className="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
                    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <input className="form-control form-control-light w-100" type="text" placeholder="Search" aria-label="Search" />
                    <div className="navbar-nav">
                        <div className="nav-item text-nowrap">
                            <a className="nav-link px-3" href="#">Sign out</a>
                        </div>
                    </div>
                </header>
                <div className="container-fluid">
                    <div className="row">
                        <Sibedabar />
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            {content}
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

