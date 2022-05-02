import QuickOperation from '@/components/QuickOperation/QuickOperation';
import { Line } from '@ant-design/charts';
import { Card, Space } from 'antd';

const AnalysisPage = () => {
  const data = [
    { date: '05-01', value: 80 },
    { date: '05-02', value: 20 },
    { date: '05-03', value: 57 },
    { date: '05-04', value: 48 },
    { date: '05-05', value: 40 },
    { date: '05-06', value: 60 },
    { date: '05-07', value: 81 }
  ];
  const config = {
    data,
    xField: 'date',
    yField: 'value'
  };

  return (
    <div className="space-y-3">
      <QuickOperation />
      <Card title="系统概况">
        <div className="flex space-x-3">
          <div className="bg-[#FF7970] p-[15px] w-[340px] rounded-md">
            <img />
            <div className="text-white">
              <h3 className="text-white">总诊断人次</h3>
              <h1 className="text-white">399人</h1>
            </div>
          </div>

          <div className="bg-[#FFD344] p-[15px] w-[340px] rounded-md">
            <img />
            <div className="text-white">
              <h3 className="text-white">设备数量</h3>
              <h1 className="text-white">399人</h1>
            </div>
          </div>
        </div>
      </Card>
      <Card title="检测人次波动情况">
        <div className="flex flex-col items-center space-y-5">
          <Line {...config} className="w-full" />
          <div className="font-bold space-x-1">
            <span className="text-gray-500">按周</span>
            <span>按月</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AnalysisPage;
