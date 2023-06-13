import { MainLayout, ContentLayout, FormField } from "@/components";

export const ArticleDetail = () => {
  return (
    <MainLayout>
      <ContentLayout padding={true} className="flex-row  pt-[10vh]">
        <section className="bg-red-200 w-3/4">
          <h1>test</h1>
        </section>
        <section className="bg-red-400 w-1/4">
          <h1>test</h1>
        </section>
      </ContentLayout>
    </MainLayout>
  );
};
