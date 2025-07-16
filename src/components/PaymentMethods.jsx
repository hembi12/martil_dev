import { CreditCard, Banknote, Building2, Smartphone } from "lucide-react";

export default function PaymentMethodsSingleCard() {
  const paymentOptions = [
    {
      title: "Tarjetas de Crédito/Débito",
      icon: <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />,
      description: "Visa, Mastercard, American Express",
    },
    {
      title: "Transferencia Bancaria",
      icon: <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />,
      description: "SPEI, depósito directo",
    },
    {
      title: "Pagos Digitales",
      icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />,
      description: "PayPal, Stripe, MercadoPago",
    },
    {
      title: "Efectivo",
      icon: <Banknote className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />,
      description: "OXXO, 7-Eleven, farmacias",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-neutral-100 to-neutral-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6 text-shadow-xs">
            Métodos de Pago
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Formas de pago disponibles. Usamos canales seguros y confiables.
          </p>
        </div>

        {/* Payment Options Card */}
        <div className="bg-white border border-neutral-200 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 shadow-md hover:shadow-lg transition-shadow duration-300">
          {/* Payment Methods Grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {paymentOptions.map((option, index) => (
              <li
                key={index}
                className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 md:p-2 lg:p-3 hover:bg-blue-50 rounded-lg transition-colors duration-200"
              >
                {/* Icon Container */}
                <div className="p-2 sm:p-2.5 md:p-3 bg-blue-50 rounded-lg flex-shrink-0">
                  {option.icon}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-neutral-700 text-sm sm:text-base md:text-lg leading-tight mb-1">
                    {option.title}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-neutral-500 break-words leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Payment Terms & Logos - Outside Container */}
        <div className="text-center mt-6 sm:mt-8 lg:mt-12">
          {/* Payment Terms */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-600 px-2 sm:px-4 mb-4 sm:mb-6 lg:mb-8">
            Aceptamos pagos hasta en{" "}
            <strong className="text-blue-600">12 meses sin intereses</strong>
          </p>

          {/* Payment Logos */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
            <img
              src="/images/visa.svg"
              alt="Visa"
              className="h-8 sm:h-8 md:h-10 lg:h-12 object-contain hover:scale-105 transition-transform duration-200"
            />
            <img
              src="/images/mastercard.svg"
              alt="Mastercard"
              className="h-8 sm:h-8 md:h-10 lg:h-12 object-contain hover:scale-105 transition-transform duration-200"
            />
            <img
              src="/images/mercadopago.svg"
              alt="MercadoPago"
              className="h-8 sm:h-8 md:h-10 lg:h-12 object-contain hover:scale-105 transition-transform duration-200"
            />
            <img
              src="/images/paypal.svg"
              alt="Paypal"
              className="h-8 sm:h-8 md:h-10 lg:h-12 object-contain hover:scale-105 transition-transform duration-200"
            />
            <img
              src="/images/stripe.png"
              alt="Stripe"
              className="h-8 sm:h-8 md:h-10 lg:h-12 object-contain hover:scale-105 transition-transform duration-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
