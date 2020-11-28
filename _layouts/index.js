function page(location) {
  // Split the pathname string into an array of sub-paths
  let myLocation = location.pathname.split('/').join('');

  if (myLocation === '') {
    myLocation = 'shobiz';
  } 

 return myLocation
}

const TemplateWrapper = ({ location, children, data }) => (
  <div>
   <Helmet
      title={` ${page(location)} - ${data.site.siteMetadata.title}` }
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    {children()}
    <Footer />
  </div>
)