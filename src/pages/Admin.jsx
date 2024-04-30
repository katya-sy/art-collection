import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductCreateForm } from "../components/ProductCreateForm";

export const Admin = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="wrapper">
          <Tabs>
            <TabList>
              <Tab>Добавить</Tab>
              <Tab>Редактировать</Tab>
              <Tab>Удалить</Tab>
            </TabList>

            <TabPanel>
              <Tabs>
                <TabList className="flex-20" style={{ marginBottom: 30 }}>
                  <Tab style={{ fontSize: 18 }}>Товар</Tab>
                  <Tab style={{ fontSize: 18 }}>Категория</Tab>
                </TabList>
                <TabPanel>
                  <ProductCreateForm />
                </TabPanel>
                <TabPanel>
                  <h2>форма для категории</h2>
                </TabPanel>
              </Tabs>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>

      <Footer />
    </>
  );
};
