import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { 
  Calculator, 
  Building2, 
  FileText, 
  Clock, 
  Users, 
  Shield, 
  CheckCircle2, 
  AlertTriangle,
  Zap,
  DollarSign,
  MessageCircle,
  BarChart3,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Briefcase,
  Receipt,
  TrendingUp,
  HelpCircle,
  FileCheck,
  Banknote,
  ArrowRight,
  Award,
  Target,
  Heart
} from "lucide-react";

function formatNumber(num: number): string {
  return num.toLocaleString("zh-TW");
}

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center gap-3" data-testid="link-logo">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-primary-foreground font-bold text-lg">Q</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-semibold text-foreground tracking-tight">會林會計師事務所</div>
              <div className="text-xs text-muted-foreground">Qualin CPA Firm</div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#calculator" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium" data-testid="link-calculator">費用試算</a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium" data-testid="link-services">服務項目</a>
            <a href="#subsidy" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium" data-testid="link-subsidy">政府補助</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium" data-testid="link-faq">常見問題</a>
            <Button asChild data-testid="button-contact-nav">
              <a href="#contact">免費諮詢</a>
            </Button>
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <a href="#calculator" className="block py-2 text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)} data-testid="link-calculator-mobile">費用試算</a>
            <a href="#services" className="block py-2 text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)} data-testid="link-services-mobile">服務項目</a>
            <a href="#subsidy" className="block py-2 text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)} data-testid="link-subsidy-mobile">政府補助</a>
            <a href="#faq" className="block py-2 text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)} data-testid="link-faq-mobile">常見問題</a>
            <Button asChild className="w-full" data-testid="button-contact-mobile">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>免費諮詢</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            <span>10年以上專業經驗</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
            讓專業會計師
            <br className="hidden md:block" />
            <span className="text-primary">為您的事業把關</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            從記帳報稅到稅務規劃，我們以多年實務經驗，提供溫暖且專業的財務服務，讓您安心專注於事業發展
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8 py-6" asChild data-testid="button-hero-calculator">
              <a href="#calculator" className="inline-flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                立即試算費用
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6" asChild data-testid="button-hero-contact">
              <a href="#contact" className="inline-flex items-center gap-2">
                免費諮詢
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "10+", label: "服務年資", icon: Award },
    { value: "200+", label: "服務客戶", icon: Users },
    { value: "98%", label: "客戶滿意度", icon: Heart },
    { value: "24hr", label: "諮詢回覆", icon: Clock },
  ];

  return (
    <section className="py-12 md:py-16 bg-card border-y border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-3">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemsSection() {
  const problems = [
    { icon: AlertTriangle, title: "帳目混亂", desc: "不知道公司到底賺多少錢" },
    { icon: Clock, title: "報稅焦慮", desc: "每到報稅季就擔心漏報被罰" },
    { icon: HelpCircle, title: "節稅困惑", desc: "想節稅但不知道合法方式" },
    { icon: MessageCircle, title: "無人可問", desc: "有稅務問題不知道該問誰" },
    { icon: FileText, title: "時間不足", desc: "自己記帳佔用太多時間" },
    { icon: Receipt, title: "文件繁瑣", desc: "各種申報表格看不懂" },
  ];

  const implications = [
    { text: "漏報營業稅：", warning: "罰款最高 3 倍稅額" },
    { text: "帳目不清：", warning: "銀行貸款被拒" },
    { text: "不當節稅：", warning: "稅務調查、補稅加罰" },
    { text: "逾期申報：", warning: "滯納金每 2 天加 1%" },
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">這些情況，您是否似曾相識？</h2>
          <p className="text-muted-foreground">許多老闆都曾遇過這些問題...</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {problems.map((problem, index) => (
            <Card key={index} className="p-5 hover-elevate active-elevate-2 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-500/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <problem.icon className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{problem.title}</h3>
                  <p className="text-muted-foreground text-sm">{problem.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 md:p-8 bg-gradient-to-r from-destructive/5 to-amber-500/5 border-destructive/20">
          <h3 className="text-lg md:text-xl font-semibold text-destructive mb-5 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            小問題可能變成大麻煩
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {implications.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <ChevronRight className="h-4 w-4 text-destructive flex-shrink-0" />
                <span className="text-muted-foreground">
                  {item.text}<span className="text-destructive font-medium">{item.warning}</span>
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

function SolutionsSection() {
  const solutions = [
    { icon: Zap, title: "專注本業", desc: "不再為帳務煩惱" },
    { icon: DollarSign, title: "合法節稅", desc: "每年省下可觀稅金" },
    { icon: MessageCircle, title: "專人服務", desc: "問題隨時有人回答" },
    { icon: CheckCircle2, title: "準時申報", desc: "不再擔心罰款" },
    { icon: BarChart3, title: "財務透明", desc: "隨時掌握經營狀況" },
  ];

  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">交給專業會計師，您可以...</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-foreground/15 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <solution.icon className="h-7 w-7 md:h-8 md:w-8" />
              </div>
              <h3 className="font-semibold mb-1">{solution.title}</h3>
              <p className="text-primary-foreground/70 text-sm">{solution.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalculatorSection() {
  const [activeTab, setActiveTab] = useState<"bookkeeping" | "company" | "vat">("bookkeeping");
  
  const [revenue, setRevenue] = useState(500000);
  const [vouchers, setVouchers] = useState(50);
  const [hasImportExport, setHasImportExport] = useState(false);
  
  const [companyType, setCompanyType] = useState("limited");
  const [capital, setCapital] = useState(1000000);
  
  const [salesAmount, setSalesAmount] = useState(0);
  const [purchaseAmount, setPurchaseAmount] = useState(0);

  const calculateBookkeeping = () => {
    let base = 2000;
    if (revenue > 300000) base += Math.floor((revenue - 300000) / 100000) * 300;
    if (vouchers > 30) base += Math.floor((vouchers - 30) / 20) * 500;
    if (hasImportExport) base += 1500;
    return { min: base, max: Math.round(base * 1.3) };
  };

  const calculateCompany = () => {
    let govFee = 0;
    let agentFee = 0;
    if (companyType === "sole") {
      govFee = 1000;
      agentFee = 3000;
    } else if (companyType === "limited") {
      govFee = 1000 + Math.ceil(capital / 1000) * 4 / 1000;
      agentFee = 8000;
    } else {
      govFee = 1000 + Math.ceil(capital / 1000) * 4 / 1000;
      agentFee = 12000;
    }
    return { govFee: Math.round(govFee), agentFee };
  };

  const calculateVAT = () => {
    const outputTax = Math.round(salesAmount * 0.05);
    const inputTax = Math.round(purchaseAmount * 0.05);
    return { outputTax, inputTax, payable: outputTax - inputTax };
  };

  const bookkeepingResult = calculateBookkeeping();
  const companyResult = calculateCompany();
  const vatResult = calculateVAT();

  const tabs = [
    { id: "bookkeeping" as const, icon: Calculator, label: "記帳費用" },
    { id: "company" as const, icon: Building2, label: "公司設立" },
    { id: "vat" as const, icon: Receipt, label: "營業稅" },
  ];

  return (
    <section id="calculator" className="py-16 md:py-20 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">費用試算中心</h2>
          <p className="text-muted-foreground">立即了解服務費用，透明不加價</p>
        </div>

        <Card className="p-6 md:p-8">
          <div className="flex gap-2 mb-8 bg-muted p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`button-tab-${tab.id}`}
              >
                <tab.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {activeTab === "bookkeeping" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <Label className="text-sm font-medium mb-3 block">每月營業額</Label>
                  <Slider
                    value={[revenue]}
                    onValueChange={([val]) => setRevenue(val)}
                    min={100000}
                    max={5000000}
                    step={100000}
                    className="mb-2"
                    data-testid="slider-revenue"
                  />
                  <div className="text-right text-primary font-semibold">
                    ${formatNumber(revenue)}
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium mb-3 block">每月傳票筆數</Label>
                  <Slider
                    value={[vouchers]}
                    onValueChange={([val]) => setVouchers(val)}
                    min={10}
                    max={500}
                    step={10}
                    className="mb-2"
                    data-testid="slider-vouchers"
                  />
                  <div className="text-right text-primary font-semibold">
                    {vouchers} 筆
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="import-export"
                    checked={hasImportExport}
                    onCheckedChange={(checked) => setHasImportExport(checked as boolean)}
                    data-testid="checkbox-import-export"
                  />
                  <Label htmlFor="import-export" className="cursor-pointer">有進出口業務</Label>
                </div>
              </div>

              <Card className="p-6 bg-muted/30">
                <h3 className="text-lg font-semibold text-foreground mb-4">預估月費</h3>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2" data-testid="text-bookkeeping-result">
                  ${formatNumber(bookkeepingResult.min)} - ${formatNumber(bookkeepingResult.max)}
                </div>
                <p className="text-muted-foreground text-sm mb-6">每月記帳服務費（未稅）</p>
                <Button asChild className="w-full" data-testid="button-bookkeeping-cta">
                  <a href="#contact">取得正式報價</a>
                </Button>
              </Card>
            </div>
          )}

          {activeTab === "company" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <Label className="text-sm font-medium mb-2 block">公司類型</Label>
                  <Select value={companyType} onValueChange={setCompanyType}>
                    <SelectTrigger data-testid="select-company-type">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sole">獨資/合夥（行號）</SelectItem>
                      <SelectItem value="limited">有限公司</SelectItem>
                      <SelectItem value="stock">股份有限公司</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm font-medium mb-3 block">資本額（元）</Label>
                  <Slider
                    value={[capital]}
                    onValueChange={([val]) => setCapital(val)}
                    min={100000}
                    max={10000000}
                    step={100000}
                    className="mb-2"
                    data-testid="slider-capital"
                  />
                  <div className="text-right text-primary font-semibold">
                    ${formatNumber(capital)}
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-muted/30">
                <h3 className="text-lg font-semibold text-foreground mb-4">預估費用</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">政府規費</span>
                    <span className="font-semibold">${formatNumber(companyResult.govFee)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">代辦服務費</span>
                    <span className="font-semibold">${formatNumber(companyResult.agentFee)}</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between text-lg">
                    <span className="font-semibold text-foreground">合計</span>
                    <span className="font-bold text-primary" data-testid="text-company-result">
                      ${formatNumber(companyResult.govFee + companyResult.agentFee)}
                    </span>
                  </div>
                </div>
                <Button asChild className="w-full" data-testid="button-company-cta">
                  <a href="#contact">免費諮詢設立流程</a>
                </Button>
              </Card>
            </div>
          )}

          {activeTab === "vat" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <Label className="text-sm font-medium mb-2 block">銷售額（銷項）</Label>
                  <Input
                    type="number"
                    value={salesAmount || ""}
                    onChange={(e) => setSalesAmount(Number(e.target.value))}
                    placeholder="輸入銷售金額"
                    data-testid="input-sales"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium mb-2 block">進貨額（進項）</Label>
                  <Input
                    type="number"
                    value={purchaseAmount || ""}
                    onChange={(e) => setPurchaseAmount(Number(e.target.value))}
                    placeholder="輸入進貨金額"
                    data-testid="input-purchase"
                  />
                </div>
              </div>

              <Card className="p-6 bg-muted/30">
                <h3 className="text-lg font-semibold text-foreground mb-4">營業稅計算</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">銷項稅額 (5%)</span>
                    <span className="font-semibold">${formatNumber(vatResult.outputTax)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">進項稅額 (5%)</span>
                    <span className="font-semibold text-green-600">-${formatNumber(vatResult.inputTax)}</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between text-lg">
                    <span className="font-semibold text-foreground">
                      {vatResult.payable >= 0 ? "應繳稅額" : "可扣抵/退稅"}
                    </span>
                    <span className={`font-bold ${vatResult.payable >= 0 ? "text-destructive" : "text-green-600"}`} data-testid="text-vat-result">
                      ${formatNumber(Math.abs(vatResult.payable))}
                    </span>
                  </div>
                </div>
                <Button asChild className="w-full" data-testid="button-vat-cta">
                  <a href="#contact">營業稅申報代辦</a>
                </Button>
              </Card>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: Calculator,
      title: "記帳報稅",
      desc: "代理記帳、營業稅申報、各類所得稅申報",
      price: "$2,000 起/月",
    },
    {
      icon: BarChart3,
      title: "稅務規劃",
      desc: "企業稅務健診、合法節稅方案規劃",
      price: "依案件報價",
    },
    {
      icon: FileCheck,
      title: "審計簽證",
      desc: "財務報表簽證、工商登記簽證",
      price: "$15,000 起",
    },
    {
      icon: Building2,
      title: "公司設立",
      desc: "公司/行號設立、變更登記、停業解散",
      price: "$8,000 起",
    },
    {
      icon: Briefcase,
      title: "薪資代管",
      desc: "薪資計算、勞健保加退、扣繳申報",
      price: "$100/人起",
    },
    {
      icon: TrendingUp,
      title: "創業諮詢",
      desc: "創業補助申請、營運計畫撰寫輔導",
      price: "免費初次諮詢",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">服務項目</h2>
          <p className="text-muted-foreground">專業服務，價格透明</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover-elevate active-elevate-2 transition-all group" data-testid={`card-service-${index}`}>
              <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/15 rounded-xl flex items-center justify-center mb-5 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.desc}</p>
              <p className="text-primary font-semibold">{service.price}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function SubsidySection() {
  const subsidies = [
    {
      title: "SBIR 小型企業創新研發計畫",
      amount: "最高 $500 萬",
      desc: "補助中小企業進行產品、技術或服務創新研發",
    },
    {
      title: "青年創業貸款",
      amount: "最高 $400 萬",
      desc: "提供青年創業低利貸款，利息補貼最高5年",
    },
    {
      title: "SIIR 服務業創新研發計畫",
      amount: "最高 $300 萬",
      desc: "針對服務業創新計畫提供研發補助",
    },
  ];

  return (
    <section id="subsidy" className="py-16 md:py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">政府補助資源</h2>
          <p className="text-muted-foreground">我們協助您申請各類政府補助，把握資源不錯過</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {subsidies.map((subsidy, index) => (
            <Card key={index} className="p-6 hover-elevate active-elevate-2 transition-all" data-testid={`card-subsidy-${index}`}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                <Banknote className="h-4 w-4" />
                {subsidy.amount}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{subsidy.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{subsidy.desc}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" asChild data-testid="button-subsidy-cta">
            <a href="#contact" className="inline-flex items-center gap-2">
              <Target className="h-4 w-4" />
              免費評估資格
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "記帳服務費用怎麼計算？",
      a: "費用依據公司營業額、傳票筆數及業務複雜度而定。一般小型公司每月約 $2,000-$4,000，中型公司約 $4,000-$8,000。歡迎使用上方試算器預估，或直接聯繫我們取得正式報價。",
    },
    {
      q: "新設公司需要準備什麼文件？",
      a: "需準備：1) 負責人身分證正反面影本 2) 公司名稱預查核准函 3) 營業場所證明（房屋稅單或租約）4) 印章（公司大小章）。我們會協助您完成所有流程。",
    },
    {
      q: "多久可以完成公司設立？",
      a: "一般約 5-7 個工作天可完成。包含：名稱預查（1天）→ 資本簽證（1-2天）→ 設立登記（3-4天）。如需加急處理，請提前告知。",
    },
    {
      q: "記帳服務包含哪些項目？",
      a: "基本服務包含：每月傳票編製、帳簿登載、營業稅申報、年度營所稅申報、各類所得扣繳申報。另可加購薪資計算、勞健保處理等服務。",
    },
    {
      q: "可以只做年度報稅不做記帳嗎？",
      a: "可以。我們提供「年度稅務申報」單項服務，費用依複雜度而定，約 $5,000-$15,000。但建議平時委託記帳，帳務清楚、報稅更省力。",
    },
    {
      q: "如何開始合作？",
      a: "1) 免費諮詢：說明您的需求 2) 報價確認：我們提供正式報價 3) 簽約合作：確認服務內容 4) 開始服務：提供帳務資料即可。整個過程不用親自跑一趟！",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">常見問題</h2>
          <p className="text-muted-foreground">快速解答您的疑問</p>
        </div>

        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-lg px-6" data-testid={`accordion-faq-${index}`}>
              <AccordionTrigger className="text-left font-semibold py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({
        title: "諮詢已送出",
        description: "我們將於 24 小時內與您聯繫",
      });
    },
    onError: () => {
      toast({
        title: "送出失敗",
        description: "請稍後再試或直接撥打電話",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-16 md:py-20 bg-card">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 md:p-12 text-center bg-primary/5 border-primary/20">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">感謝您的諮詢！</h3>
            <p className="text-muted-foreground text-lg">我們將於 24 小時內與您聯繫</p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 md:py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">免費諮詢</h2>
          <p className="text-muted-foreground">填寫表單，24小時內專人回覆</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">聯絡方式</h3>
              <div className="space-y-4">
                <a href="tel:0912365411" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors" data-testid="link-phone">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <span>0912-365-411</span>
                </a>
                <a href="mailto:service@qualin.tw" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors" data-testid="link-email">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span>service@qualin.tw</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground" data-testid="text-address">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span>台北市中山區民生東路二段</span>
                </div>
              </div>
            </div>

            <Card className="p-5 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">專業保障</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                本事務所具備專業責任保險，讓您的財務交付更安心
              </p>
            </Card>
          </div>

          <Card className="lg:col-span-3 p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="mb-2 block">姓名 *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="您的姓名"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="mb-2 block">電話 *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0912-345-678"
                    data-testid="input-phone"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="mb-2 block">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  data-testid="input-email"
                />
              </div>

              <div>
                <Label htmlFor="service" className="mb-2 block">需求類型 *</Label>
                <Select value={formData.service} onValueChange={(val) => setFormData({ ...formData, service: val })}>
                  <SelectTrigger data-testid="select-service">
                    <SelectValue placeholder="請選擇..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bookkeeping">記帳報稅</SelectItem>
                    <SelectItem value="company">公司設立</SelectItem>
                    <SelectItem value="tax">稅務規劃</SelectItem>
                    <SelectItem value="audit">審計簽證</SelectItem>
                    <SelectItem value="subsidy">政府補助諮詢</SelectItem>
                    <SelectItem value="other">其他</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="mb-2 block">補充說明</Label>
                <Textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="請簡述您的需求..."
                  className="resize-none"
                  data-testid="textarea-message"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full" 
                disabled={submitMutation.isPending}
                data-testid="button-submit-contact"
              >
                {submitMutation.isPending ? "送出中..." : "送出諮詢"}
              </Button>

              <p className="text-center text-muted-foreground text-sm">
                或直接撥打 <a href="tel:0912365411" className="text-primary font-medium hover:underline">0912-365-411</a>
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">Q</span>
              </div>
              <div>
                <div className="font-semibold">會林會計師事務所</div>
                <div className="text-sm text-background/60">Qualin CPA Firm</div>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed max-w-md">
              10年以上專業經驗，服務超過200家企業。我們以誠信、專業、效率為核心價值，為您的事業財務把關。
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">服務項目</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#services" className="hover:text-background transition-colors">記帳報稅</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">稅務規劃</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">公司設立</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">審計簽證</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">聯絡資訊</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>電話：0912-365-411</li>
              <li>Email：service@qualin.tw</li>
              <li>地址：台北市中山區民生東路二段</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} 會林會計師事務所. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ProblemsSection />
      <SolutionsSection />
      <CalculatorSection />
      <ServicesSection />
      <SubsidySection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
