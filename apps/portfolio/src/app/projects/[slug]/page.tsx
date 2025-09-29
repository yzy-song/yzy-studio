import AuraArchitecture from '@/app/components/AuraArchitecture';
import ChimeraLensArchitecture from '@/app/components/ChimeraLensArchitecture';
import CloudloomArchitecture from '@/app/components/CloudloomArchitecture';
import NailsalonArchitecture from '@/app/components/NailsalonArchitecture';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// 导入所有架构组件

// 映射 slug 到对应的组件
const componentMap: { [key: string]: React.FC } = {
  'aura': AuraArchitecture,
  'chimeralens': ChimeraLensArchitecture,
  'cloudloom': CloudloomArchitecture,
  'nailsalon': NailsalonArchitecture,
};

// 定义页面参数的类型
interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = params;
  
  // 查找对应的组件
  const ArchitectureComponent = componentMap[slug];

  // 如果找不到对应的 slug，则显示 404 页面
  if (!ArchitectureComponent) {
    notFound();
  }

  // 渲染架构组件
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center capitalize">
        {slug.replace('-', ' ')} Project Architecture
      </h1>
      
      {/* 渲染动态加载的架构图组件 */}
      <ArchitectureComponent />
      
      {/* 添加一个返回按钮 */}
      <div className="text-center mt-8">
        <Link href="/" className="text-blue-600 hover:text-blue-800 transition">
          ← Back to Portfolio
        </Link>
      </div>
    </div>
  );
}