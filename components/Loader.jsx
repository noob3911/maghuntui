import React from "react";
import ContentLoader from "react-content-loader";

const TableLoader = (props) => (
   <ContentLoader width={355} height={160} viewBox="0 0 355 160" backgroundColor="#3f3f3f" foregroundColor="#1f1f1f" {...props}>
      {/* Card */}
      <rect x="0" y="0" rx="10" ry="10" width="355" height="160" />

      <rect x="20" y="20" rx="5" ry="5" width="200" height="12" />

      <rect x="20" y="50" rx="5" ry="5" width="60" height="8" />

      <rect x="90" y="50" rx="5" ry="5" width="100" height="8" />

      <rect x="20" y="70" rx="5" ry="5" width="40" height="8" />

      <rect x="80" y="70" rx="5" ry="5" width="40" height="8" />

      <rect x="20" y="100" rx="5" ry="5" width="140" height="10" />
   </ContentLoader>
);

export default TableLoader;
