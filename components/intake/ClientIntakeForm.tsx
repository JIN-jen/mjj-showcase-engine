"use client";

import { useMemo, useState } from "react";
import {
  type ClientIntake,
  type IntakeLanguage,
  emptyClientIntake,
  intakeLanguages,
} from "@/data/client-intake/client-schema";
import { templates } from "@/data/templates";

type ClientIntakeFormProps = {
  initialIndustry?: string;
  initialTemplate?: string;
};

const steps = [
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
];

const industries = Array.from(new Set(templates.map((template) => template.industry)));

function parseLines(value: string) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function formatList(value: string[]) {
  return value.length ? value.join(", ") : "Not provided";
}

export function ClientIntakeForm({ initialIndustry = "", initialTemplate = "" }: ClientIntakeFormProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [servicesInput, setServicesInput] = useState("");
  const [productsInput, setProductsInput] = useState("");
  const [intake, setIntake] = useState<ClientIntake>({
    ...emptyClientIntake,
    industry: initialIndustry,
    template: initialTemplate,
  });

  const templateOptions = useMemo(
    () =>
      templates.filter((template) => {
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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setActiveStep(steps.length - 1);
  }

  const stepNumber = String(activeStep + 1).padStart(2, "0");

  return (
    <form className="client-intake-form" onSubmit={handleSubmit}>
      <header>
        <p>{stepNumber} / {String(steps.length).padStart(2, "0")}</p>
        <h1>Project Brief</h1>
        <h2>{steps[activeStep]}</h2>
      </header>

      <div className="client-intake-form__body">
        {activeStep === 0 ? (
          <section>
            <label htmlFor="industry">Choose Industry</label>
            <select id="industry" name="industry" value={intake.industry} onChange={(event) => updateIndustry(event.target.value)}>
              <option value="">Select industry</option>
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </section>
        ) : null}

        {activeStep === 1 ? (
          <section>
            <label htmlFor="template">Choose Template</label>
            <select
              id="template"
              name="template"
              value={intake.template}
              onChange={(event) => updateField("template", event.target.value)}
            >
              <option value="">Select template</option>
              {templateOptions.map((template) => (
                <option key={template.templateId} value={template.templateId}>
                  {template.templateName}
                </option>
              ))}
            </select>
          </section>
        ) : null}

        {activeStep === 2 ? (
          <section>
            <label htmlFor="clientName">Company Name</label>
            <input
              id="clientName"
              name="clientName"
              type="text"
              value={intake.clientName}
              onChange={(event) => updateField("clientName", event.target.value)}
            />

            <label htmlFor="companyDescription">Company Description</label>
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
            <label htmlFor="services">Services</label>
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

            <label htmlFor="products">Products</label>
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
            <label htmlFor="address">Address</label>
            <input id="address" name="address" type="text" value={intake.address} onChange={(event) => updateField("address", event.target.value)} />

            <label htmlFor="city">City</label>
            <input id="city" name="city" type="text" value={intake.city} onChange={(event) => updateField("city", event.target.value)} />

            <label htmlFor="country">Country</label>
            <input id="country" name="country" type="text" value={intake.country} onChange={(event) => updateField("country", event.target.value)} />

            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" value={intake.phone} onChange={(event) => updateField("phone", event.target.value)} />

            <label htmlFor="whatsapp">WhatsApp</label>
            <input id="whatsapp" name="whatsapp" type="tel" value={intake.whatsapp} onChange={(event) => updateField("whatsapp", event.target.value)} />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={intake.email} onChange={(event) => updateField("email", event.target.value)} />

            <label htmlFor="website">Website</label>
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
            <label htmlFor="logo">Upload Logo</label>
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
            <label htmlFor="images">Upload Images</label>
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
              <legend>Languages</legend>
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
                <dt>Industry</dt>
                <dd>{intake.industry || "Not selected"}</dd>
              </div>
              <div>
                <dt>Template</dt>
                <dd>{intake.template || "Not selected"}</dd>
              </div>
              <div>
                <dt>Company</dt>
                <dd>{intake.clientName || "Not provided"}</dd>
              </div>
              <div>
                <dt>Services</dt>
                <dd>{formatList(intake.services)}</dd>
              </div>
              <div>
                <dt>Products</dt>
                <dd>{formatList(intake.products)}</dd>
              </div>
              <div>
                <dt>Contact</dt>
                <dd>{intake.email || intake.whatsapp || intake.phone || "Not provided"}</dd>
              </div>
              <div>
                <dt>Logo</dt>
                <dd>{intake.logo || "Not uploaded"}</dd>
              </div>
              <div>
                <dt>Images</dt>
                <dd>{intake.images.length ? `${intake.images.length} uploaded` : "Not uploaded"}</dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>{formatList(intake.languages)}</dd>
              </div>
            </dl>
          </section>
        ) : null}

        {activeStep === 9 ? (
          <section>
            <p>Your project brief is ready to submit.</p>
            <button type="submit">Submit Project Brief</button>
          </section>
        ) : null}
      </div>

      <nav aria-label="Project brief steps">
        <button type="button" onClick={previousStep} disabled={activeStep === 0}>
          Back
        </button>
        <button type="button" onClick={nextStep} disabled={activeStep === steps.length - 1}>
          Next
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
