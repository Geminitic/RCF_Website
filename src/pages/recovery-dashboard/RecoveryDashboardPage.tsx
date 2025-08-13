import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell,
} from 'recharts';
import {
  Home,
  TrendingUp,
  Activity,
  HelpCircle,
  RefreshCw,
  Droplets,
  Briefcase,
} from 'lucide-react';
import '../../styles/recovery-dashboard.css';
import DataSources from '../../components/recovery-dashboard/DataSources';
import DataSourcesMap from '../../components/recovery-dashboard/DataSourcesMap.jsx';
import { Button } from '../../components/ui/Button';

// Sample indicator data
const indicators = [
  { id: 'idp_returns', value: 8754, change: +12.3, status: 'improving' },
  { id: 'humanitarian_access', value: 42, change: -8.6, status: 'worsening' },
  { id: 'education_access', value: 63, change: +5.2, status: 'improving' },
  { id: 'electricity_hours', value: 8.2, change: +1.5, status: 'improving' },
];

// Sample chart data
const monthlyData = [
  { name: 'Jan', refugees: 4000, idps: 2400, returnees: 1800 },
  { name: 'Feb', refugees: 3800, idps: 2200, returnees: 2000 },
  { name: 'Mar', refugees: 3600, idps: 2000, returnees: 2200 },
  { name: 'Apr', refugees: 3400, idps: 1800, returnees: 2400 },
  { name: 'May', refugees: 3200, idps: 1600, returnees: 2600 },
  { name: 'Jun', refugees: 3000, idps: 1400, returnees: 2800 },
];

// Sample pie chart data
const sectoralFunding = [
  { name: 'Health', value: 35 },
  { name: 'Food Security', value: 25 },
  { name: 'Education', value: 15 },
  { name: 'Shelter', value: 15 },
  { name: 'WASH', value: 10 },
];

// Sample colors for pie chart
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const RecoveryDashboardPage: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const isArabic = currentLanguage.code === 'ar';
  const [selectedTimeframe, setSelectedTimeframe] = useState('month');

  // Function to get icon and color based on indicator ID
  const getIndicatorDetails = (id: string) => {
    switch (id) {
      case 'idp_returns':
        return {
          icon: <Home className="h-5 w-5" aria-hidden />,
          color: 'bg-green-600',
        };
      case 'humanitarian_access':
        return {
          icon: <Droplets className="h-5 w-5" aria-hidden />,
          color: 'bg-red-600',
        };
      case 'education_access':
        return {
          icon: <Briefcase className="h-5 w-5" aria-hidden />,
          color: 'bg-blue-600',
        };
      case 'electricity_hours':
        return {
          icon: <Activity className="h-5 w-5" aria-hidden />,
          color: 'bg-yellow-600',
        };
      default:
        return {
          icon: <HelpCircle className="h-5 w-5" aria-hidden />,
          color: 'bg-gray-600',
        };
    }
  };

  // Get label for indicator based on language and ID
  const getIndicatorLabel = (id: string) => {
    switch (id) {
      case 'idp_returns':
        return isArabic ? 'عودة النازحين' : 'IDP Returns';
      case 'humanitarian_access':
        return isArabic ? 'الوصول الإنساني' : 'Humanitarian Access';
      case 'education_access':
        return isArabic ? 'الوصول إلى التعليم' : 'Education Access';
      case 'electricity_hours':
        return isArabic ? 'ساعات الكهرباء' : 'Electricity (hrs)';
      default:
        return id;
    }
  };

  // Get change indicator style based on status
  const getChangeStyle = (status: string) => {
    switch (status) {
      case 'improving':
        return 'text-green-500';
      case 'worsening':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="recovery-dashboard min-h-screen pt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="dashboard-header bg-gradient-to-r from-purple-700 via-blue-700 to-teal-700 text-white p-6 rounded-2xl shadow-xl mb-8">
          <h1
            className={`text-3xl font-bold mb-2 ${isArabic ? 'rs-arabic' : ''}`}
          >
            {isArabic ? 'لوحة تعافي سوريا' : 'Syria Recovery Dashboard'}
          </h1>
          <p className={`text-white/80 mb-4 ${isArabic ? 'rs-arabic' : ''}`}>
            {isArabic
              ? 'نظام مراقبة شامل للمؤشرات الحيوية'
              : 'Comprehensive Vital Signs Monitoring System'}
          </p>

          {/* Timeframe selector */}
          <div
            className={`flex mt-4 bg-white/10 rounded-lg p-1 w-fit ${isArabic ? 'flex-row-reverse mr-auto' : 'ml-0'}`}
            role="tablist"
            aria-label={isArabic ? 'تحديد الإطار الزمني' : 'Select timeframe'}
          >
            {['week', 'month', 'quarter', 'year'].map((timeframe) => {
              const active = selectedTimeframe === timeframe;
              const label = isArabic
                ? timeframe === 'week'
                  ? 'أسبوع'
                  : timeframe === 'month'
                    ? 'شهر'
                    : timeframe === 'quarter'
                      ? 'ربع سنة'
                      : 'سنة'
                : timeframe.charAt(0).toUpperCase() + timeframe.slice(1);
              return (
                <Button
                  key={timeframe}
                  variant={active ? 'secondary' : 'outline'}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md !shadow-none ${active ? 'ring-0' : 'opacity-80 hover:opacity-100'} ${isArabic ? 'rs-arabic' : ''}`}
                  aria-pressed={active}
                  role="tab"
                  onClick={() => setSelectedTimeframe(timeframe)}
                >
                  {label}
                </Button>
              );
            })}
          </div>
        </header>

        {/* Indicator cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {indicators.map((indicator) => {
            const { icon, color } = getIndicatorDetails(indicator.id);
            return (
              <div
                key={indicator.id}
                className="bg-white p-4 rounded-lg shadow-md dashboard-tile hover:shadow-lg"
              >
                <div
                  className={`flex items-center mb-3 ${isArabic ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`h-10 w-10 rounded-lg flex items-center justify-center text-white ${color} ${isArabic ? 'ml-3' : 'mr-3'}`}
                  >
                    {icon}
                  </div>
                  <h3
                    className={`font-semibold ${isArabic ? 'rs-arabic' : ''}`}
                  >
                    {getIndicatorLabel(indicator.id)}
                  </h3>
                </div>
                <div
                  className={`flex items-end justify-between ${isArabic ? 'flex-row-reverse' : ''}`}
                >
                  <div className="text-2xl font-bold">{indicator.value}</div>
                  <div
                    className={`flex items-center ${getChangeStyle(indicator.status)} ${isArabic ? 'flex-row-reverse' : ''}`}
                  >
                    {indicator.status === 'improving' ? (
                      <TrendingUp
                        className={`h-4 w-4 ${isArabic ? 'ml-1' : 'mr-1'}`}
                      />
                    ) : (
                      <TrendingUp
                        className={`h-4 w-4 transform rotate-180 ${isArabic ? 'ml-1' : 'mr-1'}`}
                      />
                    )}
                    <span className="text-sm">
                      {indicator.change > 0 ? '+' : ''}
                      {indicator.change}%
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main chart */}
        <div
          className="bg-white p-6 rounded-lg shadow-md mb-8"
          aria-labelledby="displacement-trends-heading"
        >
          <h2
            id="displacement-trends-heading"
            className={`text-xl font-bold mb-4 ${isArabic ? 'rs-arabic text-right' : ''}`}
          >
            {isArabic ? 'اتجاهات السكان النازحين' : 'Displacement Trends'}
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="refugees"
                  stroke="#8884d8"
                  name={isArabic ? 'لاجئون' : 'Refugees'}
                />
                <Line
                  type="monotone"
                  dataKey="idps"
                  stroke="#82ca9d"
                  name={isArabic ? 'نازحون داخليًا' : 'IDPs'}
                />
                <Line
                  type="monotone"
                  dataKey="returnees"
                  stroke="#ffc658"
                  name={isArabic ? 'عائدون' : 'Returnees'}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Secondary charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Sectoral funding chart */}
          <div
            className="bg-white p-6 rounded-lg shadow-md"
            aria-labelledby="funding-sector-heading"
          >
            <h2
              id="funding-sector-heading"
              className={`text-xl font-bold mb-4 ${isArabic ? 'rs-arabic text-right' : ''}`}
            >
              {isArabic ? 'التمويل حسب القطاع' : 'Funding by Sector'}
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sectoralFunding}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      percent ? `${name} ${(percent * 100).toFixed(0)}%` : name
                    }
                  >
                    {sectoralFunding.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Area chart for cumulative returns */}
          <div
            className="bg-white p-6 rounded-lg shadow-md"
            aria-labelledby="cumulative-returns-heading"
          >
            <h2
              id="cumulative-returns-heading"
              className={`text-xl font-bold mb-4 ${isArabic ? 'rs-arabic text-right' : ''}`}
            >
              {isArabic ? 'العودة التراكمية' : 'Cumulative Returns'}
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={monthlyData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="returnees"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Data sources section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2
            className={`text-xl font-bold mb-4 ${isArabic ? 'rs-arabic text-right' : ''}`}
          >
            {isArabic ? 'مصادر البيانات' : 'Data Sources'}
          </h2>
          <div
            className={`flex items-center text-blue-600 mb-4 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}
          >
            <RefreshCw className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
            <span className={`text-sm ${isArabic ? 'rs-arabic' : ''}`}>
              {isArabic ? 'آخر تحديث: أغسطس 2025' : 'Last updated: August 2025'}
            </span>
          </div>

          {/* Data Sources Map */}
          <div className="mb-8">
            <DataSourcesMap />
          </div>

          {/* Detailed Data Sources List */}
          <DataSources />
        </div>
      </div>
    </div>
  );
};

export default RecoveryDashboardPage;
