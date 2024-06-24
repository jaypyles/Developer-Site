import { useEffect } from "react";
import { routes } from "src/data/Routes";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

interface RedirectProps {
  location: string;
}

interface DynamicRouteProps {
  externalUrl: string;
}

const RedirectToExternal: React.FC<RedirectProps> = ({ location }) => {
  useEffect(() => {
    window.location.replace(location);
  }, [location]);

  return null;
};

const DynamicRoute: React.FC<DynamicRouteProps> = ({ externalUrl }) => {
  return <RedirectToExternal location={externalUrl} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = routes.map((route) => ({
    params: { path: route.path },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const path = params?.path as string;

  const route = routes.find((r) => r.path === path);

  if (!route) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      externalUrl: route.to,
    },
  };
};

export default DynamicRoute;
