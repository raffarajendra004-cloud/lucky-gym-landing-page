import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { toast } from "sonner";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const packages = [
  {
    id: "gym-reguler",
    name: "Gym Reguler",
    price: 299000,
    features: ["Akses 24/7", "Semua equipment", "Locker & shower", "WiFi unlimited"],
  },
  {
    id: "personal-trainer",
    name: "Personal Trainer",
    price: 799000,
    features: ["Gym included", "4x sesi training", "Program custom", "Nutrition plan"],
    featured: true,
  },
  {
    id: "pilates-class",
    name: "Pilates Class",
    price: 399000,
    features: ["Unlimited class", "Small groups", "Equipment premium", "Flexible schedule"],
  },
];

export default function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
  const [step, setStep] = useState<"package" | "form" | "summary" | "success">("package");
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
    setStep("form");
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Mohon lengkapi semua data");
      return;
    }
    setStep("summary");
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep("success");
      toast.success("Pembayaran berhasil! Selamat bergabung dengan Lucky Gym");
    }, 2000);
  };

  const selectedPkg = packages.find((p) => p.id === selectedPackage);

  const handleClose = () => {
    setStep("package");
    setSelectedPackage(null);
    setFormData({ name: "", phone: "", email: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black/50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-border p-6 flex items-center justify-between">
              <h2 className="heading-md">Daftar Member</h2>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-card rounded transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Step 1: Package Selection */}
              {step === "package" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-4"
                >
                  <h3 className="heading-md mb-6">Pilih Paket Anda</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {packages.map((pkg) => (
                      <motion.button
                        key={pkg.id}
                        onClick={() => handlePackageSelect(pkg.id)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          pkg.featured
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {pkg.featured && (
                          <div className="mb-2 inline-block px-2 py-1 bg-primary text-primary-foreground text-xs font-bold rounded">
                            Recommended
                          </div>
                        )}
                        <h4 className="font-bold mb-2">{pkg.name}</h4>
                        <p className="text-2xl font-bold text-primary mb-3">
                          Rp {pkg.price.toLocaleString("id-ID")}
                        </p>
                        <ul className="space-y-1">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                              <Check size={14} className="text-primary flex-shrink-0 mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Form */}
              {step === "form" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <h3 className="heading-md mb-6">Data Pribadi</h3>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Nama Lengkap</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Nama Anda"
                        className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">No HP</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="0857-1014-5550"
                        className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="email@example.com"
                        className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="flex gap-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setStep("package")}
                        className="flex-1 px-4 py-2 border-2 border-primary text-primary font-bold rounded hover:bg-primary/5"
                      >
                        Kembali
                      </button>
                      <button
                        type="submit"
                        className="flex-1 px-4 py-2 bg-primary text-primary-foreground font-bold rounded hover:shadow-lg"
                      >
                        Lanjut
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* Step 3: Summary */}
              {step === "summary" && selectedPkg && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <h3 className="heading-md mb-6">Ringkasan Pesanan</h3>
                  <div className="space-y-4 mb-6">
                    <div className="p-4 bg-card rounded">
                      <p className="text-sm text-muted-foreground mb-1">Nama</p>
                      <p className="font-semibold">{formData.name}</p>
                    </div>
                    <div className="p-4 bg-card rounded">
                      <p className="text-sm text-muted-foreground mb-1">Paket</p>
                      <p className="font-semibold">{selectedPkg.name}</p>
                    </div>
                    <div className="p-4 bg-primary/10 rounded border-2 border-primary">
                      <p className="text-sm text-muted-foreground mb-1">Total Pembayaran</p>
                      <p className="text-2xl font-bold text-primary">
                        Rp {selectedPkg.price.toLocaleString("id-ID")}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep("form")}
                      className="flex-1 px-4 py-2 border-2 border-primary text-primary font-bold rounded hover:bg-primary/5"
                    >
                      Edit
                    </button>
                    <button
                      onClick={handlePayment}
                      disabled={isProcessing}
                      className="flex-1 px-4 py-2 bg-primary text-primary-foreground font-bold rounded hover:shadow-lg disabled:opacity-50"
                    >
                      {isProcessing ? "Memproses..." : "Bayar Sekarang"}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Success */}
              {step === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-8"
                >
                  <motion.div
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Check size={32} className="text-green-600" />
                  </motion.div>
                  <h3 className="heading-md mb-2">Pembayaran Berhasil!</h3>
                  <p className="text-muted-foreground mb-6">
                    Selamat bergabung dengan Lucky Gym. Kami akan menghubungi Anda segera.
                  </p>
                  <button
                    onClick={handleClose}
                    className="px-6 py-2 bg-primary text-primary-foreground font-bold rounded hover:shadow-lg"
                  >
                    Tutup
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
