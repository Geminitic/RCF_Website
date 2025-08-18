import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  Droplets,
  Briefcase,
  MapPin,
  Database,
  ExternalLink,
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/Button';
import '../../styles/embedded-recovery-dashboard.css';

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

const EmbeddedRecoveryDashboard: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
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
          icon: <Activity className="h-5 w-5" aria-hidden />,
          color: 'bg-gray-600',
        };
    }
  };

  // Get label for indicator based on ID
  const getIndicatorLabel = (id: string) => {
    switch (id) {
      case 'idp_returns':
        return t('indicator-idp-returns', 'IDP Returns', 'عودة النازحين');
      case 'humanitarian_access':
        return t('indicator-humanitarian-access', 'Humanitarian Access', 'الوصول الإنساني');
      case 'education_access':
        return t('indicator-education-access', 'Education Access', 'الوصول للتعليم');
      case 'electricity_hours':
        return t('indicator-electricity', 'Electricity (hrs)', 'الكهرباء (ساعات)');
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
    <div className={`embedded-recovery-dashboard bg-white rounded-2xl shadow-xl overflow-hidden ${isArabic ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-700 via-blue-700 to-teal-700 text-white p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-2">
            <Database className="h-8 w-8 mr-3" />
            <h2 className={`text-2xl font-bold ${isArabic ? 'font-arabic' : ''}`}>
              {t('recovery-dashboard-title', 'Syria Recovery Dashboard', 'لوحة التعافي السورية')}
            </h2>
          </div>
          <p className={`text-white/80 ${isArabic ? 'font-arabic' : ''}`}>
            {t('recovery-dashboard-subtitle', 'Comprehensive Vital Signs Monitoring System', 'نظام مراقبة العلامات الحيوية الشامل')}
          </p>

          {/* Timeframe selector */}
          <div className={`flex mt-4 bg-white/10 rounded-lg p-1 w-fit ${isArabic ? 'mr-0' : 'ml-0'}`} role="tablist" aria-label="Select timeframe">
            {['week', 'month', 'quarter', 'year'].map((timeframe) => {
              const active = selectedTimeframe === timeframe;
              const label = t(`timeframe-${timeframe}`, timeframe.charAt(0).toUpperCase() + timeframe.slice(1), 
                timeframe === 'week' ? 'أسبوع' : 
                timeframe === 'month' ? 'شهر' : 
                timeframe === 'quarter' ? 'ربع سنة' : 'سنة'
              );
              return (
                <Button
                  key={timeframe}
                  variant={active ? 'secondary' : 'outline'}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md !shadow-none ${active ? 'ring-0' : 'opacity-80 hover:opacity-100'} ${isArabic ? 'font-arabic' : ''}`}
                  aria-pressed={active}
                  role="tab"
                  onClick={() => setSelectedTimeframe(timeframe)}
                >
                  {label}
                </Button>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="p-6">
        {/* Indicator cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {indicators.map((indicator, index) => {
            const { icon, color } = getIndicatorDetails(indicator.id);
            return (
              <motion.div
                key={indicator.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className={`flex items-center mb-3 ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center text-white ${color} ${isArabic ? 'ml-3' : 'mr-3'}`}>
                    {icon}
                  </div>
                  <h3 className={`font-semibold text-sm ${isArabic ? 'font-arabic text-right' : ''}`}>
                    {getIndicatorLabel(indicator.id)}
                  </h3>
                </div>
                <div className={`flex items-end justify-between ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <div className="text-2xl font-bold">{indicator.value}</div>
                  <div className={`flex items-center ${getChangeStyle(indicator.status)}`}>
                    {indicator.status === 'improving' ? (
                      <TrendingUp className="h-4 w-4 mr-1" />
                    ) : (
                      <TrendingUp className="h-4 w-4 transform rotate-180 mr-1" />
                    )}
                    <span className="text-sm">
                      {indicator.change > 0 ? '+' : ''}
                      {indicator.change}%
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-md mb-8"
          aria-labelledby="displacement-trends-heading"
        >
          <h3
            id="displacement-trends-heading"
            className={`text-xl font-bold mb-4 ${isArabic ? 'font-arabic text-right' : ''}`}
          >
            {t('displacement-trends', 'Displacement Trends', 'اتجاهات النزوح')}
          </h3>
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
                  name={t('refugees', 'Refugees', 'اللاجئون')}
                />
                <Line
                  type="monotone"
                  dataKey="idps"
                  stroke="#82ca9d"
                  name={t('idps', 'IDPs', 'النازحون داخلياً')}
                />
                <Line
                  type="monotone"
                  dataKey="returnees"
                  stroke="#ffc658"
                  name={t('returnees', 'Returnees', 'العائدون')}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Secondary charts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
        >
          {/* Sectoral funding chart */}
          <div
            className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-md"
            aria-labelledby="funding-sector-heading"
          >
            <h3
              id="funding-sector-heading"
              className={`text-xl font-bold mb-4 ${isArabic ? 'font-arabic text-right' : ''}`}
            >
              {t('funding-by-sector', 'Funding by Sector', 'التمويل حسب القطاع')}
            </h3>
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
            className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-md"
            aria-labelledby="cumulative-returns-heading"
          >
            <h3
              id="cumulative-returns-heading"
              className={`text-xl font-bold mb-4 ${isArabic ? 'font-arabic text-right' : ''}`}
            >
              {t('cumulative-returns', 'Cumulative Returns', 'العائدون التراكمي')}
            </h3>
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
        </motion.div>

        {/* Simplified Data Sources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md"
        >
          <div className={`flex items-center mb-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
            <MapPin className={`h-5 w-5 text-blue-600 ${isArabic ? 'ml-2' : 'mr-2'}`} />
            <h3 className={`text-lg font-bold text-gray-800 ${isArabic ? 'font-arabic text-right' : ''}`}>
              {t('data-sources', 'Data Sources', 'مصادر البيانات')}
            </h3>
          </div>
          
          <div className={`text-sm text-gray-600 space-y-2 ${isArabic ? 'font-arabic text-right' : ''}`}>
            <p>
              {t(
                'data-sources-note',
                'Data compiled from UNHCR, OCHA, WFP, WHO, and local Syrian organizations. Last updated: August 2025.',
                'البيانات مجمعة من المفوضية السامية لشؤون اللاجئين، مكتب تنسيق الشؤون الإنسانية، برنامج الأغذية العالمي، منظمة الصحة العالمية، والمنظمات السورية المحلية. آخر تحديث: أغسطس 2025.'
              )}
            </p>
            
            <div className={`flex items-center text-xs text-gray-500 mt-4 pt-4 border-t border-gray-200 ${isArabic ? 'flex-row-reverse' : ''}`}>
              <ExternalLink className={`h-3 w-3 ${isArabic ? 'ml-1' : 'mr-1'}`} />
              <span>
                {t(
                  'sources-attribution',
                  'Sources: UNHCR, OCHA, WFP, WHO, Syrian Civil Society Organizations',
                  'المصادر: المفوضية السامية، مكتب تنسيق الشؤون الإنسانية، برنامج الأغذية العالمي، منظمة الصحة العالمية، منظمات المجتمع المدني السوري'
                )}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EmbeddedRecoveryDashboard;
