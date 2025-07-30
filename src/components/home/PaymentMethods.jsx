import { CreditCard, Banknote, Building2, Smartphone } from "lucide-react";

export default function PaymentMethodsSingleCard() {
  const paymentOptions = [
    {
      title: "Tarjetas de Crédito/Débito",
      icon: <CreditCard className="w-5 h-5 sm:w-7 sm:h-7 text-blue-600" />,
      description: "Visa, Mastercard, American Express",
    },
    {
      title: "Transferencia Bancaria",
      icon: <Building2 className="w-5 h-5 sm:w-7 sm:h-7 text-orange-600" />,
      description: "SPEI, depósito directo",
    },
    {
      title: "Pagos Digitales",
      icon: <Smartphone className="w-5 h-5 sm:w-7 sm:h-7 text-purple-600" />,
      description: "PayPal, Stripe, MercadoPago",
    },
    {
      title: "Efectivo",
      icon: <Banknote className="w-5 h-5 sm:w-7 sm:h-7 text-green-600" />,
      description: "OXXO, 7-Eleven, farmacias",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-950 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-shadow-md">
            Métodos de Pago
          </h2>
        </div>

        {/* Payment Methods Grid - Sin contenedor de tarjeta */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {paymentOptions.map((option, index) => (
            <li
              key={index}
              className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 md:p-2 lg:p-3 hover:bg-neutral-100 shadow-md hover:shadow-lg rounded-lg border border-neutral-200 transition-all duration-300 bg-white"
            >
              {/* Icon Container */}
              <div className="p-2 sm:p-2.5 md:p-3 flex-shrink-0">
                {option.icon}
              </div>

              {/* Content - MEJORADO */}
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-neutral-700 text-base sm:text-lg md:text-xl leading-tight mb-1">
                  {option.title}
                </p>
                <p className="text-sm sm:text-base md:text-lg text-neutral-500 break-words leading-relaxed">
                  {option.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Payment Terms & Logos */}
        <div className="text-center">
          {/* Payment Terms - MEJORADO */}
          <p className="text-sm sm:text-base md:text-lg text-neutral-100 font-medium px-2 sm:px-4 mb-4 sm:mb-6 lg:mb-8">
            Aceptamos pagos hasta en{" "}
            <strong className="text-amber-400 text-shadow-md">12 meses sin intereses*</strong>
          </p>

          {/* Payment Logos - Contenedores individuales */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
            <div className="rounded-lg bg-white p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200">
              <img
                src="/images/visa.svg"
                alt="Visa"
                className="h-8 sm:h-8 md:h-10 object-contain hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="rounded-lg bg-white p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200">
              <img
                src="/images/mastercard.svg"
                alt="Mastercard"
                className="h-8 sm:h-8 md:h-10 object-contain hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="rounded-lg bg-white p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200">
              <img
                src="/images/mercadopago.svg"
                alt="MercadoPago"
                className="h-8 sm:h-8 md:h-10 object-contain hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="rounded-lg bg-white p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200">
              <img
                src="/images/paypal.svg"
                alt="Paypal"
                className="h-8 sm:h-8 md:h-10 object-contain hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="rounded-lg bg-white p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200">
              <img
                src="/images/stripe.png"
                alt="Stripe"
                className="h-8 sm:h-8 md:h-10 object-contain hover:scale-105 transition-transform duration-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}