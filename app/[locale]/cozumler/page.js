
import PageContainer from "@/components/PageContainer";
import Solutions from "@/components/Solutions";


export default function page({params: { locale }}) {
  return (
    <PageContainer>
     <Solutions locale={locale}/>
    </PageContainer>
  );
}