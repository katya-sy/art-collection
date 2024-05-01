import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductCreateForm } from "../components/ProductCreateForm";
import { CategoryCreateForm } from "../components/CategoryCreateForm";
import { ProductDeleteForm } from "../components/ProductDeleteForm";
import { CategoryDeleteForm } from "../components/CategoryDeleteForm";

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
                  <CategoryCreateForm />
                </TabPanel>
              </Tabs>
            </TabPanel>
            <TabPanel>
              <div className="flex-45 flex-col">
                <h2 className="c-purple">Уважаемые администраторы!</h2>
                <p>
                  Работа над улучшением нашего сервиса продолжается. В данный
                  момент идет активная разработка функционала редактирования
                  товаров и категорий. Это позволит Вам удобнее и проще вносить
                  изменения в ассортимент продукции и категоризировать их.
                  Следите за обновлениями и благодарим за ваше терпение и
                  понимание!
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <Tabs>
                <TabList className="flex-20" style={{ marginBottom: 30 }}>
                  <Tab style={{ fontSize: 18 }}>Товар</Tab>
                  <Tab style={{ fontSize: 18 }}>Категория</Tab>
                </TabList>
                <TabPanel>
                  <ProductDeleteForm />
                </TabPanel>
                <TabPanel>
                  <CategoryDeleteForm />
                </TabPanel>
              </Tabs>
            </TabPanel>
          </Tabs>
        </div>
      </div>

      <Footer />
    </>
  );
};
