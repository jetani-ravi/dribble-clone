import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from 'app/components/Header';
import { Footer } from 'app/components/Footer';
import { HomePage } from 'app/pages/HomePage/Loadable';
import { NotFoundPage } from 'app/components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { UserDetails } from 'app/pages/UserDetails';
import { GlobalStyle } from 'styles/global-styles';

const Router = () => {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - dribble web portal"
        defaultTitle="dribble web portal"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A dribble web portal application" />
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/UserDetails/:id" element={<UserDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default Router;
