import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type FormDataType = {
    identite: string;
    projet: string;
    urgence: string;
    description: string;
    budget: string;
    ville: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    accepte: boolean;
};

const steps = [
    "Identite",
    "Type de projet",
    "Urgence",
    "Details projet",
    "Budget",
    "Nom",
    "Email",
    "Telephone",
    "Confirmation",
];

export default function MultiStepForm() {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState<FormDataType>({
        identite: "",
        projet: "",
        urgence: "",
        description: "",
        budget: "",
        ville: "",
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        accepte: false,
    });

    const next = () => step < steps.length - 1 && setStep(step + 1);
    const prev = () => step > 0 && setStep(step - 1);

    const updateForm = <K extends keyof FormDataType>(field: K, value: FormDataType[K]) => {
        setForm({ ...form, [field]: value });
        };


    const StepCard = <K extends keyof FormDataType>({ label, value }: { label: K; value: FormDataType[K] }) => (
        <Card
            className={`cursor-pointer text-center p-4 hover:border-white border transition-all ${
            form[label] === value ? "border-white" : "border-gray-500"
            }`}
            onClick={() => updateForm(label, value)}
        >
            <CardContent>{value}</CardContent>
        </Card>
    );


    return (
        <div className="max-w-xl mx-auto text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold">{`Étape ${step + 1} : ${steps[step]}`}</h2>

        {step === 0 && (
            <div className="grid grid-cols-2 gap-4">
            <StepCard label="identite" value="Particulier" />
            <StepCard label="identite" value="Entreprise" />
            </div>
        )}

        {step === 1 && (
            <div className="grid grid-cols-2 gap-4">
            {["Portes", "Portes de garage", "Volets roulants", "Serrurerie", "Plomberie"].map(
                (v) => (
                <StepCard key={v} label="projet" value={v} />
                )
            )}
            </div>
        )}

        {step === 2 && (
            <div className="grid grid-cols-2 gap-4">
            {["Urgent", "1 mois", "3 mois", "6 mois"].map((v) => (
                <StepCard key={v} label="urgence" value={v} />
            ))}
            </div>
        )}

        {step === 3 && (
            <div>
            <Label htmlFor="desc">Parlez-nous de votre projet</Label>
            <Textarea
                id="desc"
                className="mt-2"
                value={form.description}
                onChange={(e) => updateForm("description", e.target.value)}
            />
            </div>
        )}

        {step === 4 && (
            <div>
            <Label htmlFor="budget">Quel est votre budget ?</Label>
            <Input
                id="budget"
                className="mt-2"
                value={form.budget}
                onChange={(e) => updateForm("budget", e.target.value)}
            />
            </div>
        )}

        {step === 5 && (
            <div>
            <Label htmlFor="ville">Ville et Code Postal</Label>
            <Input
                id="ville"
                className="mt-2"
                value={form.ville}
                onChange={(e) => updateForm("ville", e.target.value)}
            />
            </div>
        )}

        {step === 6 && (
            <div className="grid grid-cols-2 gap-4">
            <Input
                placeholder="Prénom"
                value={form.prenom}
                onChange={(e) => updateForm("prenom", e.target.value)}
            />
            <Input
                placeholder="Nom"
                value={form.nom}
                onChange={(e) => updateForm("nom", e.target.value)}
            />
            </div>
        )}

        {step === 7 && (
            <div>
            <Label>Email</Label>
            <Input
                type="email"
                value={form.email}
                onChange={(e) => updateForm("email", e.target.value)}
            />
            </div>
        )}

        {step === 8 && (
            <div>
            <Label>Téléphone</Label>
            <Input
                type="tel"
                value={form.telephone}
                onChange={(e) => updateForm("telephone", e.target.value)}
            />
            </div>
        )}

        {step === 9 && (
            <div>
            <p>
                En soumettant ce formulaire, j'accepte que les informations saisies soient
                utilisées pour me recontacter dans le cadre de cette demande.
            </p>
            <div className="flex items-center gap-4 mt-4">
                <Button onClick={() => updateForm("accepte", true)} variant={form.accepte ? "default" : "outline"}>
                J'accepte
                </Button>
                <Button onClick={() => updateForm("accepte", false)} variant={!form.accepte ? "default" : "outline"}>
                Je n'accepte pas
                </Button>
            </div>
            </div>
        )}

        <div className="flex justify-between pt-4">
            {step > 0 ? <Button onClick={prev}>Retour</Button> : <div />}
            {step < steps.length - 1 ? (
            <Button onClick={next}>Suivant</Button>
            ) : (
            <Button disabled={!form.accepte}>Envoyer</Button>
            )}
        </div>
    </div>
  );
}
