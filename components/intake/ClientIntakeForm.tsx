"use client";

import { type FormEvent, useMemo, useState } from "react";
import {
  type ClientIntake,
  type IntakeLanguage,
  emptyClientIntake,
  intakeLanguages,
} from "@/data/client-intake/client-schema";

type ClientIntakeFormProps = {
  initialIndustry?: string;
  initialTemplate?: string;
  language?: "cn" | "en";
};

const formCopy = {
  cn: {
    address: "地址",
    back: "返回",
    city: "城市",
    clientName: "公司名称",
    companyDescription: "公司介绍",
    contact: "联系方式",
    country: "国家",
    email: "邮箱",
    facebook: "Facebook",
    googleMaps: "Google Maps",
    images: "图片",
    imageUploaded: "已上传",
    industry: "行业",
    languages: "网站语言",
    linkedin: "LinkedIn",
    logo: "Logo",
    next: "下一步",
    notProvided: "未填写",
    notSelected: "未选择",
    notUploaded: "未上传",
    phone: "电话",
    products: "产品",
    projectBrief: "项目资料提交",
    readyToSubmit: "项目资料已准备提交。",
    selectIndustry: "选择行业",
    selectTemplate: "选择模板",
    services: "服务",
    submitProjectBrief: "提交项目资料",
    template: "模板",
    website: "网站",
    whatsapp: "WhatsApp",
    steps: [
      "选择行业",
      "选择模板",
      "公司信息",
      "服务 / 产品",
      "联系方式",
      "上传 Logo",
      "上传图片",
      "网站语言",
      "检查资料",
      "提交",
    ],
  },
  en: {
    address: "Address",
    back: "Back",
    city: "City",
    clientName: "Company Name",
    companyDescription: "Company Description",
    contact: "Contact",
    country: "Country",
    email: "Email",
    facebook: "Facebook",
    googleMaps: "Google Maps",
    images: "Images",
    imageUploaded: "uploaded",
    industry: "Industry",
    languages: "Languages",
    linkedin: "LinkedIn",
    logo: "Logo",
    next: "Next",
    notProvided: "Not provided",
    notSelected: "Not selected",
    notUploaded: "Not uploaded",
    phone: "Phone",
    products: "Products",
    projectBrief: "Project Brief",
    readyToSubmit: "Your project brief is ready to submit.",
    selectIndustry: "Select industry",
    selectTemplate: "Select template",
    services: "Services",
    submitProjectBrief: "Submit Project Brief",
    template: "Template",
    website: "Website",
    whatsapp: "WhatsApp",
    steps: [
      "Choose Industry",
      "Choose Template",
      "Company Information",
      "Services / Products",
      "Contact Information",
      "Upload Logo",
      "Upload Images",
      "Languages",
      "Review",
      "Submit",
    ],
  },
};

const industryOptions = [
  { label: "Hospitality", labelCn: "酒店行业", value: "hospitality" },
  { label: "Restaurant", labelCn: "餐饮行业", value: "restaurant" },
  { label: "Construction", labelCn: "建筑行业", value: "construction" },
  { label: "Mining", labelCn: "矿业行业", value: "mining" },
  { label: "Import & Wholesale", labelCn: "进口与批发", value: "import-wholesale" },
  { label: "Logistics", labelCn: "物流行业", value: "logistics" },
  { label: "Agriculture", labelCn: "农业行业", value: "agriculture" },
  { label: "Professional Services", labelCn: "专业服务", value: "professional-services" },
];

const industrySlugByName = new Map(industryOptions.map((industry) => [industry.label, industry.value]));

const templateOptions = [
  { industry: "hospitality", label: "Luxury Hotel", labelCn: "豪华酒店", value: "luxury-hotel" },
  { industry: "hospitality", label: "Beach Resort", labelCn: "海滨度假村", value: "beach-resort" },
  { industry: "hospitality", label: "Safari Lodge", labelCn: "野奢营地", value: "safari-lodge" },
  { industry: "hospitality", label: "Business Hotel", labelCn: "商务酒店", value: "business-hotel" },
  { industry: "hospitality", label: "Serviced Apartment", labelCn: "服务式公寓", value: "serviced-apartment" },
  { industry: "restaurant", label: "Fine Dining", labelCn: "高端餐厅", value: "fine-dining" },
  { industry: "restaurant", label: "Cafe", labelCn: "咖啡馆", value: "cafe" },
  { industry: "restaurant", label: "Fast Food", labelCn: "快餐店", value: "fast-food" },
  { industry: "restaurant", label: "Bakery", labelCn: "烘焙店", value: "bakery" },
  { industry: "restaurant", label: "Food Court", labelCn: "美食广场", value: "food-court" },
  { industry: "construction", label: "Contractor", labelCn: "总承包公司", value: "contractor" },
  { industry: "construction", label: "Engineering Company", labelCn: "工程公司", value: "engineering-company" },
  { industry: "construction", label: "Equipment Rental", labelCn: "设备租赁", value: "equipment-rental" },
  { industry: "construction", label: "Building Materials", labelCn: "建材供应", value: "building-materials" },
  { industry: "construction", label: "Road Bridge", labelCn: "道路桥梁", value: "road-bridge" },
  { industry: "mining", label: "Mine Operator", labelCn: "矿山运营", value: "mine-operator" },
  { industry: "mining", label: "Mineral Trading", labelCn: "矿产贸易", value: "mineral-trading" },
  { industry: "mining", label: "Equipment Service", labelCn: "设备服务", value: "equipment-service" },
  { industry: "mining", label: "Drilling Service", labelCn: "钻探服务", value: "drilling-service" },
  { industry: "mining", label: "Processing Plant", labelCn: "选矿加工", value: "processing-plant" },
  { industry: "import-wholesale", label: "General Trading", labelCn: "综合贸易", value: "general-trading" },
  {
    industry: "import-wholesale",
    label: "Building Materials Import",
    labelCn: "建材进口",
    value: "building-materials-import",
  },
  { industry: "import-wholesale", label: "Machinery Import", labelCn: "机械进口", value: "machinery-import" },
  {
    industry: "import-wholesale",
    label: "Consumer Goods Wholesale",
    labelCn: "日用品批发",
    value: "consumer-goods-wholesale",
  },
  {
    industry: "import-wholesale",
    label: "Auto Parts Wholesale",
    labelCn: "汽配批发",
    value: "auto-parts-wholesale",
  },
  { industry: "logistics", label: "Freight Forwarder", labelCn: "货运代理", value: "freight-forwarder" },
  { industry: "logistics", label: "Trucking Company", labelCn: "运输车队", value: "trucking-company" },
  { industry: "logistics", label: "Customs Clearance", labelCn: "清关服务", value: "customs-clearance" },
  { industry: "logistics", label: "Warehouse", labelCn: "仓储服务", value: "warehouse" },
  { industry: "logistics", label: "Port Logistics", labelCn: "港口物流", value: "port-logistics" },
  { industry: "agriculture", label: "Commercial Farm", labelCn: "商业农场", value: "commercial-farm" },
  { industry: "agriculture", label: "Agro Processing", labelCn: "农产品加工", value: "agro-processing" },
  { industry: "agriculture", label: "Livestock Farm", labelCn: "畜牧农场", value: "livestock-farm" },
  {
    industry: "agriculture",
    label: "Agricultural Equipment",
    labelCn: "农业设备",
    value: "agricultural-equipment",
  },
  { industry: "agriculture", label: "Food Export", labelCn: "食品出口", value: "food-export" },
  { industry: "professional-services", label: "Law Firm", labelCn: "律师事务所", value: "law-firm" },
  { industry: "professional-services", label: "Accounting Firm", labelCn: "会计事务所", value: "accounting-firm" },
  { industry: "professional-services", label: "Consulting Company", labelCn: "咨询公司", value: "consulting-company" },
  {
    industry: "professional-services",
    label: "Architecture Studio",
    labelCn: "建筑设计事务所",
    value: "architecture-studio",
  },
  { industry: "professional-services", label: "Medical Clinic", labelCn: "医疗诊所", value: "medical-clinic" },
];

function normalizeIndustry(industry: string) {
  return industrySlugByName.get(industry) ?? industry;
}

function parseLines(value: string) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function formatList(value: string[], fallback: string) {
  return value.length ? value.join(", ") : fallback;
}

export function ClientIntakeForm({
  initialIndustry = "",
  initialTemplate = "",
  language = "en",
}: ClientIntakeFormProps) {
  const copy = formCopy[language];
  const [activeStep, setActiveStep] = useState(0);
  const [servicesInput, setServicesInput] = useState("");
  const [productsInput, setProductsInput] = useState("");
  const [intake, setIntake] = useState<ClientIntake>({
    ...emptyClientIntake,
    industry: normalizeIndustry(initialIndustry),
    template: initialTemplate,
  });

  const visibleTemplateOptions = useMemo(
    () =>
      templateOptions.filter((template) => {
        if (!intake.industry) {
          return true;
        }

        return template.industry === intake.industry;
      }),
    [intake.industry],
  );

  function updateField<Key extends keyof ClientIntake>(field: Key, value: ClientIntake[Key]) {
    setIntake((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function updateIndustry(industry: string) {
    setIntake((current) => ({
      ...current,
      industry,
      template: current.industry === industry ? current.template : "",
    }));
  }

  function toggleLanguage(language: IntakeLanguage) {
    setIntake((current) => {
      const languages = current.languages.includes(language)
        ? current.languages.filter((item) => item !== language)
        : [...current.languages, language];

      return {
        ...current,
        languages,
      };
    });
  }

  function nextStep() {
    setActiveStep((current) => Math.min(current + 1, steps.length - 1));
  }

  function previousStep() {
    setActiveStep((current) => Math.max(current - 1, 0));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setActiveStep(steps.length - 1);
  }

  const stepNumber = String(activeStep + 1).padStart(2, "0");
  const steps = copy.steps;

  return (
    <form className="client-intake-form" onSubmit={handleSubmit}>
      <header>
        <p>{stepNumber} / {String(steps.length).padStart(2, "0")}</p>
        <h1>{copy.projectBrief}</h1>
        <h2>{steps[activeStep]}</h2>
      </header>

      <div className="client-intake-form__body">
        {activeStep === 0 ? (
          <section>
            <label htmlFor="industry">{copy.steps[0]}</label>
            <select id="industry" name="industry" value={intake.industry} onChange={(event) => updateIndustry(event.target.value)}>
              <option value="">{copy.selectIndustry}</option>
              {industryOptions.map((industry) => (
                <option key={industry.value} value={industry.value}>
                  {language === "cn" ? industry.labelCn : industry.label}
                </option>
              ))}
            </select>
          </section>
        ) : null}

        {activeStep === 1 ? (
          <section>
            <label htmlFor="template">{copy.steps[1]}</label>
            <select
              id="template"
              name="template"
              value={intake.template}
              onChange={(event) => updateField("template", event.target.value)}
            >
              <option value="">{copy.selectTemplate}</option>
              {visibleTemplateOptions.map((template) => (
                <option key={template.value} value={template.value}>
                  {language === "cn" ? template.labelCn : template.label}
                </option>
              ))}
            </select>
          </section>
        ) : null}

        {activeStep === 2 ? (
          <section>
            <label htmlFor="clientName">{copy.clientName}</label>
            <input
              id="clientName"
              name="clientName"
              type="text"
              value={intake.clientName}
              onChange={(event) => updateField("clientName", event.target.value)}
            />

            <label htmlFor="companyDescription">{copy.companyDescription}</label>
            <textarea
              id="companyDescription"
              name="companyDescription"
              rows={6}
              value={intake.companyDescription}
              onChange={(event) => updateField("companyDescription", event.target.value)}
            />
          </section>
        ) : null}

        {activeStep === 3 ? (
          <section>
            <label htmlFor="services">{copy.services}</label>
            <textarea
              id="services"
              name="services"
              rows={5}
              value={servicesInput}
              onChange={(event) => {
                setServicesInput(event.target.value);
                updateField("services", parseLines(event.target.value));
              }}
            />

            <label htmlFor="products">{copy.products}</label>
            <textarea
              id="products"
              name="products"
              rows={5}
              value={productsInput}
              onChange={(event) => {
                setProductsInput(event.target.value);
                updateField("products", parseLines(event.target.value));
              }}
            />
          </section>
        ) : null}

        {activeStep === 4 ? (
          <section>
            <label htmlFor="address">{copy.address}</label>
            <input id="address" name="address" type="text" value={intake.address} onChange={(event) => updateField("address", event.target.value)} />

            <label htmlFor="city">{copy.city}</label>
            <input id="city" name="city" type="text" value={intake.city} onChange={(event) => updateField("city", event.target.value)} />

            <label htmlFor="country">{copy.country}</label>
            <input id="country" name="country" type="text" value={intake.country} onChange={(event) => updateField("country", event.target.value)} />

            <label htmlFor="phone">{copy.phone}</label>
            <input id="phone" name="phone" type="tel" value={intake.phone} onChange={(event) => updateField("phone", event.target.value)} />

            <label htmlFor="whatsapp">WhatsApp</label>
            <input id="whatsapp" name="whatsapp" type="tel" value={intake.whatsapp} onChange={(event) => updateField("whatsapp", event.target.value)} />

            <label htmlFor="email">{copy.email}</label>
            <input id="email" name="email" type="email" value={intake.email} onChange={(event) => updateField("email", event.target.value)} />

            <label htmlFor="website">{copy.website}</label>
            <input id="website" name="website" type="url" value={intake.website} onChange={(event) => updateField("website", event.target.value)} />

            <label htmlFor="googleMaps">Google Maps</label>
            <input
              id="googleMaps"
              name="googleMaps"
              type="url"
              value={intake.googleMaps}
              onChange={(event) => updateField("googleMaps", event.target.value)}
            />

            <label htmlFor="facebook">Facebook</label>
            <input id="facebook" name="facebook" type="url" value={intake.facebook} onChange={(event) => updateField("facebook", event.target.value)} />

            <label htmlFor="instagram">Instagram</label>
            <input id="instagram" name="instagram" type="url" value={intake.instagram} onChange={(event) => updateField("instagram", event.target.value)} />

            <label htmlFor="linkedin">LinkedIn</label>
            <input id="linkedin" name="linkedin" type="url" value={intake.linkedin} onChange={(event) => updateField("linkedin", event.target.value)} />
          </section>
        ) : null}

        {activeStep === 5 ? (
          <section>
            <label htmlFor="logo">{copy.steps[5]}</label>
            <input
              id="logo"
              name="logo"
              type="file"
              accept="image/*"
              onChange={(event) => updateField("logo", event.target.files?.[0]?.name ?? "")}
            />
          </section>
        ) : null}

        {activeStep === 6 ? (
          <section>
            <label htmlFor="images">{copy.steps[6]}</label>
            <input
              id="images"
              name="images"
              type="file"
              accept="image/*"
              multiple
              onChange={(event) =>
                updateField(
                  "images",
                  Array.from(event.target.files ?? []).map((file) => ({
                    name: file.name,
                    type: file.type,
                  })),
                )
              }
            />
          </section>
        ) : null}

        {activeStep === 7 ? (
          <section>
            <fieldset>
              <legend>{copy.languages}</legend>
              {intakeLanguages.map((language) => (
                <label key={language} className="client-intake-form__checkbox">
                  <input
                    checked={intake.languages.includes(language)}
                    name="languages"
                    type="checkbox"
                    value={language}
                    onChange={() => toggleLanguage(language)}
                  />
                  {language}
                </label>
              ))}
            </fieldset>
          </section>
        ) : null}

        {activeStep === 8 ? (
          <section className="client-intake-form__review">
            <dl>
              <div>
                <dt>{copy.industry}</dt>
                <dd>{intake.industry || copy.notSelected}</dd>
              </div>
              <div>
                <dt>{copy.template}</dt>
                <dd>{intake.template || copy.notSelected}</dd>
              </div>
              <div>
                <dt>{copy.clientName}</dt>
                <dd>{intake.clientName || copy.notProvided}</dd>
              </div>
              <div>
                <dt>{copy.services}</dt>
                <dd>{formatList(intake.services, copy.notProvided)}</dd>
              </div>
              <div>
                <dt>{copy.products}</dt>
                <dd>{formatList(intake.products, copy.notProvided)}</dd>
              </div>
              <div>
                <dt>{copy.contact}</dt>
                <dd>{intake.email || intake.whatsapp || intake.phone || copy.notProvided}</dd>
              </div>
              <div>
                <dt>{copy.logo}</dt>
                <dd>{intake.logo || copy.notUploaded}</dd>
              </div>
              <div>
                <dt>{copy.images}</dt>
                <dd>{intake.images.length ? `${intake.images.length} ${copy.imageUploaded}` : copy.notUploaded}</dd>
              </div>
              <div>
                <dt>{copy.languages}</dt>
                <dd>{formatList(intake.languages, copy.notProvided)}</dd>
              </div>
            </dl>
          </section>
        ) : null}

        {activeStep === 9 ? (
          <section>
            <p>{copy.readyToSubmit}</p>
            <button type="submit">{copy.submitProjectBrief}</button>
          </section>
        ) : null}
      </div>

      <nav aria-label="Project brief steps">
        <button type="button" onClick={previousStep} disabled={activeStep === 0}>
          {copy.back}
        </button>
        <button type="button" onClick={nextStep} disabled={activeStep === steps.length - 1}>
          {copy.next}
        </button>
      </nav>

      <style jsx>{`
        .client-intake-form {
          display: grid;
          gap: clamp(2rem, 5vw, 5rem);
          width: min(74vw, 54rem);
          margin: 0 auto;
          color: #111;
        }

        header,
        section,
        fieldset,
        .client-intake-form__body {
          display: grid;
          gap: clamp(0.78rem, 1.35vw, 1.35rem);
        }

        header p,
        header h1,
        header h2,
        label,
        legend,
        dt,
        nav button,
        section button {
          margin: 0;
          font: inherit;
          letter-spacing: 0.08em;
          line-height: 1.08;
          text-transform: uppercase;
        }

        header p,
        label,
        legend,
        dt {
          color: rgba(17, 17, 17, 0.42);
          font-size: clamp(0.46rem, 0.58vw, 0.62rem);
          font-weight: 500;
        }

        header h1 {
          font-size: clamp(2.4rem, 8vw, 8rem);
          font-weight: 400;
          letter-spacing: 0;
          line-height: 0.9;
          text-transform: none;
        }

        header h2 {
          font-size: clamp(0.72rem, 0.96vw, 1rem);
          font-weight: 400;
          letter-spacing: 0.04em;
        }

        input,
        select,
        textarea {
          width: 100%;
          border: 0;
          border-bottom: 1px solid rgba(17, 17, 17, 0.24);
          border-radius: 0;
          background: transparent;
          color: #111;
          font: inherit;
          font-size: clamp(0.82rem, 1.2vw, 1.2rem);
          line-height: 1.3;
          outline: none;
          padding: 0.32rem 0;
        }

        fieldset {
          margin: 0;
          border: 0;
          padding: 0;
        }

        .client-intake-form__checkbox {
          display: flex;
          align-items: center;
          gap: 0.58rem;
          color: #111;
          font-size: clamp(0.74rem, 1vw, 1rem);
          letter-spacing: 0.04em;
          text-transform: none;
        }

        .client-intake-form__checkbox input {
          width: auto;
        }

        .client-intake-form__review dl {
          display: grid;
          gap: 0.78rem;
          margin: 0;
        }

        .client-intake-form__review div {
          display: grid;
          gap: 0.2rem;
        }

        dd {
          margin: 0;
          font-size: clamp(0.82rem, 1.15vw, 1.15rem);
          line-height: 1.28;
        }

        nav {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
        }

        nav button,
        section button {
          border: 0;
          background: transparent;
          color: #111;
          cursor: pointer;
          padding: 0;
          text-align: left;
        }

        nav button:disabled {
          color: rgba(17, 17, 17, 0.28);
          cursor: default;
        }
      `}</style>
    </form>
  );
}
